from django.db import models

# Create your models here.
class MarketingRecord(models.Model):
    index = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)
    budget = models.FloatField()
    projectname = models.CharField(max_length=50)
    client = models.CharField(max_length=50)
    method = models.CharField(max_length=50)
    remark = models.CharField(max_length=200)
    responsible = models.CharField(max_length=20)

    class Meta:
        db_table = 't_market_record'
