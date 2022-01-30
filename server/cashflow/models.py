from django.db import models
import os
from datetime import datetime
import django.utils.timezone as timezone
# Create your models here.
class CashRecord(models.Model):
    index = models.AutoField(primary_key=True)
    date = models.DateField(default=timezone.now())
    usage = models.CharField(max_length=50)
    type = models.IntegerField()
    amount = models.FloatField()
    remark = models.CharField(max_length=100)
    file = models.CharField(max_length=200)
    client = models.CharField(max_length=50)

    class Meta:
        db_table = 't_cashrecord'

