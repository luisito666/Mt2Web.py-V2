from django.contrib import admin

# Locals Forms
from .forms import AccountCreationForm

# Locals Models
from .models import Account


class AccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'login', 'real_name', 'email', 'status', 'availdt')
    search_fields = ['refer_id', 'login', 'email']
    form = AccountCreationForm


admin.site.register(Account, AccountAdmin)
