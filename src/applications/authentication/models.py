"""
    Models
"""

import jwt

from django.db import models
from django.utils import timezone

# Utils Timezone
from datetime import datetime, timedelta

# Translation
from django.utils.translation import gettext_lazy as _

# From local base models and managers
from .base import (
    BaseAccountManager,
    AbstractBaseAccount
)

# Local Settings
from core import settings


class AccountManager(BaseAccountManager):

    def _create_account(self, login, password, email, real_name, social_id):
        if not login:
            raise ValueError('The given login must be set')
    
        email = self.normalize_email(email)
        user = self.model(login=login, email=email, real_name=real_name, social_id=social_id)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_account(self, login, password=None, email=None, real_name=None, social_id=None):
        return self._create_account(login,password,email,real_name,social_id)


class AbstractAccount(AbstractBaseAccount):
    login = models.CharField(unique=True, max_length=30)
    real_name = models.CharField(max_length=16, blank=True, null=True)
    social_id = models.CharField(max_length=13)
    email = models.CharField(max_length=64)
    address = models.CharField(max_length=128, blank=True, null=True)
    coins = models.IntegerField(default=0)
    create_time = models.DateTimeField(default=timezone.now)
    availdt = models.DateTimeField(db_column='availDt',default=settings.ACTIVATE)
    gold_expire = models.DateTimeField(default=settings.BUFFSTUF)
    silver_expire = models.DateTimeField(default=settings.BUFFSTUF)
    safebox_expire = models.DateTimeField(default=settings.BUFFSTUF)
    autoloot_expire = models.DateTimeField(default=settings.BUFFSTUF)
    fish_mind_expire = models.DateTimeField(default=settings.BUFFSTUF)
    marriage_fast_expire = models.DateTimeField(default=settings.BUFFSTUF)
    money_drop_rate_expire = models.DateTimeField(default=settings.BUFFSTUF)
    token_expire = models.DateTimeField(blank=True, null=True)
    refer_id = models.IntegerField(blank=True, null=True)

    objects = AccountManager()

    USERNAME_FIELD = 'login'
    REQUIRED_FIELDS = ['real_name', 'social_id', 'email']

    class Meta:
        db_table = 'account'
        verbose_name = _('Account')
        verbose_name_plural = _('Accounts')
        abstract = True

    def __str__(self):
        return self.login

    def generate_auth_token(self):
        """
        :param user:
        :return: Token JWT
        """
        payload = {
            "sub": str(self.id),
            "iat": datetime.utcnow(),
            "exp": datetime.utcnow() + timedelta(days=1),
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
        return token
    
    @classmethod
    def verify_auth_token(cls, token):
        try:
            validate_token = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            user = cls.objects.get(id=validate_token['user_id'])
            return user
        except jwt.PyJWTError:
            raise
        except cls.DoesNotExist:
            raise
        return None


class Account(AbstractAccount):
    """
        You can add more options to account
    """
    pass
