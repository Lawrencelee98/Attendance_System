from django.core.paginator import Paginator
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import *
import json
from datetime import datetime
import jsonpickle

'''
class MarketingRecord(models.Model):
    index = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)
    budget = models.FloatField()
    projectname = models.CharField(max_length=50)
    client = models.CharField(max_length=50)
    method = models.CharField(max_length=50)
    remark = models.CharField(max_length=200)
    responsible = models.CharField(max_length=20)
'''

class CurrentUser(object):
    def __init__(self,username,nickname):
        self.username = username
        self.nickname = nickname

# Create your views here.
def getData(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        pageinfo = data['page']
        pagesize = pageinfo['pagesize']
        currentpage = pageinfo['currentpage']
        response = []
        records = []
        totalpage = 0
        marketing_num = 0 # 今天营业的次数
        marketing_account = 0 # 今天营业的预计金额
        #responseList = [] # 营业的担当者列表



        # 获取今天的营业数和预计营业额度
        try:
            print(datetime.today())
            print(datetime.now().date())
            todayItems = MarketingRecord.objects.filter(date=datetime.today().date())
            marketing_num = len(todayItems)
            for todayItem in todayItems:
                marketing_account += todayItem.budget
        except Exception as error:
            print(error)

    # 这一部分用于生成担当者列表
        # try:
        #     responselist = []
        #     responsible = MarketingRecord.objects.all().values('responsible')
        #     for res in responsible:
        #         if res['responsible'] not in responselist:
        #             responselist.append(res['responsible'])
        #     for res in responselist:
        #         responseList.append({'label': res,'value':res})
        #
        #     print(responseList)
        #
        # except Exception as error:
        #     print(error)


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
                response.append({'id': item.index,
                                 'date': item.date,
                                 'budget': item.budget,
                                 'projectname': item.projectname,
                                 'client': item.client,
                                 'remark': item.remark,
                                 'method': item.method,
                                 'responsible': item.responsible,
                                 })
        # 如果有指定日期的话
        elif data['start'] != '' and data['end'] != '':
            start_date = datetime.strptime(data['start'], '%Y-%m-%dT%H:%M:%S.%fZ')
            end_date = datetime.strptime(data['end'], '%Y-%m-%dT%H:%M:%S.%fZ')

            record_all = MarketingRecord.objects.filter(date__range=[start_date, end_date]).order_by("-date")
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
                                 'budget': item.budget,
                                 'projectname': item.projectname,
                                 'client': item.client,
                                 'remark': item.remark,
                                 'method': item.method,
                                 'responsible': item.responsible,
                                 })
        return JsonResponse({'tableData': response,
                             'total': totalpage,
                             'todayinfo': {'number': marketing_num, 'account': marketing_account},
                             })

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
        responsible = req['responsible']
        budget = req['budget']
        projectname = req['projectname']
        remark = req['remark']
        client = req['client']
        method = req['method']
        try:
            MarketingRecord.objects.create(
                budget = budget,
                projectname = projectname,
                remark = remark,
                client = client,
                method = method,
                responsible = responsible
            )
        except Exception as error:
            print(error)
            return JsonResponse({'code':500})

        return JsonResponse({'code':200})

    return JsonResponse({'code':200})


# 删除数据
def deleteItem(request):
    try:
        data = json.loads(request.body)
        index = data['id']
        MarketingRecord.objects.filter(index=index).delete()
        return JsonResponse({'code':200})
    except Exception as error:
        print(error)
        return JsonResponse({'code':500})

# 更新数据
def updateItem(request):
    data = json.loads(request.body)
    id = data['id']
    client = data['client']
    method = data['method']
    projectname = data['projectname']
    responsible = data['responsible']
    remark = data['remark']
    budget = data['budget']

    try:
        record = MarketingRecord.objects.filter(index=id).first()
        record.client = client
        record.method = method
        record.projectname = projectname
        record.responsible = responsible
        record.remark = remark
        record.budget = budget
        record.save()
        return JsonResponse({'code':200})
    except Exception as error:
        print(error)

    return JsonResponse({'code':500})