# Generated by Django 4.0.1 on 2022-01-29 14:38

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('cashflow', '0003_alter_cashrecord_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cashrecord',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 1, 29, 14, 38, 34, 734218, tzinfo=utc)),
        ),
    ]