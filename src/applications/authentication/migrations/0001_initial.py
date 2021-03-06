# Generated by Django 3.0 on 2019-12-02 18:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=45, verbose_name='password')),
                ('status', models.CharField(choices=[('OK', 'Available'), ('BLOCK', 'Banned')], default='OK', max_length=8)),
                ('login', models.CharField(max_length=30, unique=True)),
                ('real_name', models.CharField(blank=True, max_length=16, null=True)),
                ('social_id', models.CharField(max_length=13)),
                ('email', models.CharField(max_length=64)),
                ('address', models.CharField(blank=True, max_length=128, null=True)),
                ('coins', models.IntegerField(default=0)),
                ('create_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('availdt', models.DateTimeField(db_column='availDt', default='2009-01-01T00:00:00')),
                ('gold_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('silver_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('safebox_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('autoloot_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('fish_mind_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('marriage_fast_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('money_drop_rate_expire', models.DateTimeField(default='2018-08-13T00:00:00')),
                ('token_expire', models.DateTimeField(blank=True, null=True)),
                ('refer_id', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Account',
                'verbose_name_plural': 'Accounts',
                'db_table': 'account',
                'abstract': False,
            },
        ),
    ]
