from django.core.paginator import Paginator
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import *
import json

'''
class MarketingRecord(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)
    budget = models.FloatField()
    projectname = models.CharField(max_length=50)
    client = models.CharField(max_length=50)
    method = models.CharField(max_length=50)
    remark = models.CharField(max_length=200)
'''

# Create your views here.
def getData(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        pagesize = data['pagesize']
        currentpage = data['currentpage']
        response = []
        records = []
        totalpage = 0
        # 如果没有指定日期范围
        if data['start'] == '' and data['end'] == '':
            record_all = MarketingRecord.objects.all().order_by("-date")
            totalpage = len(record_all)
            pageinator = Paginator(record_all, pagesize)

            # 获取当前页数的数据
            try:
                records = pageinator.page(currentpage)
            except Exception as error:
                print(error)

            for item in records:
                hasfile = 0
                if item.file != '':
                    hasfile = 1
                response.append({'id': item.index,
                                 'date': item.date,
                                 'usage': item.usage,
                                 'type': item.type,
                                 'amount': item.amount,
                                 'remark': item.remark,
                                 'client': item.client,
                                 'hasfile': hasfile
                                 })
        # 如果有指定日期的话
        elif data['start'] != '' and data['end'] != '':
            start_date = data['start']
            end_date = data['end']
            record_all = MarketingRecord.objects.filter(date__range=[start_date, end_date])

            totalpage = len(record_all)
            paginator = Paginator(record_all, pagesize)
            # 获取当前页数的数据
            try:
                records = paginator.page(currentpage)
            except Exception as error:
                print(error)

            for item in records:
                response.append({'id': item.index,
                                 'date': item.date,
                                 'projectname': item.projectname,
                                 'budget': item.budget,
                                 'remark': item.remark,
                                 'client': item.client,
                                 })
        return JsonResponse({'tableData': response, 'total': totalpage}, safe=False)
    return HttpResponse("200")


'''
    addData:{
        date:'',
        budget:'',
        projectname:'', 
        remark:'',
        client:'',
        method:''
    },
'''

def addItem(request):
    if request.method == 'POST':
        req = json.loads(request.body)
        budget = req['budget']
        projectname = req['projectname']
        remark = req['remark']
        client = req['client']
        method = req['method']
        try:
            MarketingRecord.create(
                budget = budget,
                projectname = projectname,
                remark = remark,
                client = client,
                method = method
            )
        except Exception as error:
            print(error)
            return JsonResponse({'code':500})

        return JsonResponse({'code':200})

    return JsonResponse({'code':200})


    return HttpResponse("200")