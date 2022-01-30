# Generated by Django 4.0.1 on 2022-01-29 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CashRecord',
            fields=[
                ('index', models.AutoField(primary_key=True, serialize=False)),
                ('usage', models.CharField(max_length=50)),
                ('type', models.IntegerField()),
                ('amount', models.FloatField()),
                ('remark', models.CharField(max_length=100)),
                ('file', models.FileField(upload_to='file')),
            ],
            options={
                'db_table': 't_cashrecord',
            },
        ),
    ]