# Generated by Django 4.0.1 on 2022-01-30 03:02

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('cashflow', '0006_alter_cashrecord_client_alter_cashrecord_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cashrecord',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 1, 30, 3, 2, 37, 301411, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='cashrecord',
            name='file',
            field=models.CharField(max_length=200),
        ),
    ]
