from django.db import models


class Record(models.Model):
    # 负责记录考勤数据
    item_num = models.AutoField(primary_key=True)
    item_name = models.CharField(max_length=20)
    item_id = models.CharField(max_length=50)
    item_date = models.CharField(max_length=50)
    item_create_date = models.DateTimeField()

    class Meta:
        db_table = "t_record"

    def __str__(self):
        return f"{self.item_id}:{self.item_date}"





