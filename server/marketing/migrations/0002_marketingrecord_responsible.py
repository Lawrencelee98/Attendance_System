# Generated by Django 4.0.1 on 2022-02-02 03:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketing', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='marketingrecord',
            name='responsible',
            field=models.CharField(default='responsible', max_length=20),
            preserve_default=False,
        ),
    ]
