from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=32)
    nickname = models.CharField(max_length=20)

    class Meta:
        db_table = 'user_table'

