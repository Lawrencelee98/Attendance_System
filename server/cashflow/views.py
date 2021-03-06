from django.http import HttpResponse, JsonResponse, StreamingHttpResponse, Http404, FileResponse
from django.shortcuts import render
import os
import bson
import json
from .models import *
from django.conf import settings
from django.core.paginator import Paginator
# Create your views here.


def addItem(request):
    if request.method == 'POST':
        req = json.loads(request.body)
        usage = req['usage']
        date = datetime.strptime(req['date'], '%Y-%m-%d')
        type = req['type']
        amount = req['amount']
        remark = req['remark']
        client = req['client']
        record = CashRecord.objects.create(
            usage=usage,
            type=int(type),
            amount=round(float(amount), 2),
            remark=remark,
            date=date,
            client=client
        )

        return JsonResponse({'code':200, 'id':record.index})

    # file name '61f4d1fcca1e7ae288fb1e6d'
    # path = os.path.join(os.getcwd(), 'media',"filename")
    # print(path)
    return HttpResponse("200")


def getData(request):

    data = json.loads(request.body)
    # 用于存储模型查询出来的数据
    records = []
    # 用于存储将要返回的数据
    response = []
    # 将上传上来的JSON对象变成字典
    pageinfo = data['page']
    # 上传上来的pagesize
    pagesize = pageinfo['pagesize']
    # 上传上来的当前页数
    currentpage = pageinfo['currentpage']
    # 用于存储查询到的所有条目数
    totalpage = 0
    # 当日的收支情况
    todayInfo = {'income': 0 , 'expense': 0}

    # 计算当日的收支
    today_records = CashRecord.objects.filter(date=datetime.now().date())
    for today_record in today_records:
        if today_record.type == 0:
            todayInfo['expense'] += today_record.amount
        else:
            todayInfo['income'] += today_record.amount


    # 如果没有指定日期范围
    if data['start'] == '' and data['end'] == '':
        record_all = CashRecord.objects.all().order_by("-date")
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
        start_date = datetime.strptime(data['start'], '%Y-%m-%dT%H:%M:%S.%fZ')
        end_date = datetime.strptime(data['end'], '%Y-%m-%dT%H:%M:%S.%fZ')

        record_all = CashRecord.objects.filter(date__range=[start_date, end_date]).order_by("-date")

        totalpage = len(record_all)
        paginator = Paginator(record_all, pagesize)

        # 获取当前页数的数据
        try:
            records = paginator.page(currentpage)
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
    return JsonResponse({'tableData': response, 'total': totalpage, 'today':todayInfo}, safe=False)
# Article.objects.filter(pub_date__range=[startdate, enddate])


def uploadfile(request, index):
    # user id 61f54c0cca1e7af8f8f0f0e6
    '''
    上传的逻辑：
    将上传的文件保存到media中用户名文件下，并自动生成文件名
    将保存的路径写入到模型里，当需要下载是调用模型中的路径
    如果上传成功 code = 200 ，失败 code = 500

    '''
    # 首先获取上传上来的文件
    file = request.FILES.get('file', None)
    if file is None:
        return
    # 在这里判断一下文件的大小是否合规，如果太大有可能是恶意文件
    # 在前端也判断一下文件的大小,如果文件大于10个字节则放弃上传
    if file.size > 1024*1024*10:
        return JsonResponse({'code': 500})

    # 获取用户的id，现在先随便生成一个值
    user_id = '61f54c0cca1e7af8f8f0f0e6'

    # 生成对应用户下的文件夹，没有的话创建
    file_path = os.path.join(settings.BASE_DIR, 'media', user_id)
    if not os.path.exists(file_path):
        os.makedirs(file_path)

    # 生成文件名，用bson或者hash都可以
    filename = '61f4d1fcca1e7ae288fb1e6d.jpg'

    # 有了文件名之后就可以生成保存的完整路径
    fullfilepath = os.path.join(file_path, filename)
    print("fullfillpath:"+fullfilepath)
    # 写入数据
    with open(fullfilepath, 'wb') as fw:
        for ck in file.chunks():
            fw.write(ck)

    # 根据伪静态的id来查找对应的数据，将数据保存的模型里
    cashrecord = CashRecord.objects.filter(index=index).first()
    cashrecord.file = fullfilepath
    cashrecord.save()
    print(len(fullfilepath))
    print("cashrecord:" ,cashrecord.file)
    return JsonResponse({"code": 200})


def downloadfile(request, index):
    record = CashRecord.objects.filter(index=index).first()
    filepath = record.file
    try:
        response = FileResponse(open(filepath, 'rb'))
        response['content_type'] = "application/octet-stream"
        response['Content-Disposition'] = 'attachment; filename=' + filepath.split('\\')[-1]
        print(filepath.split('\\')[-1])
        return response
    except Exception:
        raise Http404



# 2022/2/3 update
def delete(request):
    data = json.loads(request.body)
    try:
        index = data['id']
        CashRecord.objects.filter(index=index).delete()
        return JsonResponse({'code':200})
    except Exception as error:
        print(error)
        return JsonResponse({'code':500})


def update(request):
    if request.method == 'POST':
        try:
            req = json.loads(request.body)
            index = req['id']
            usage = req['usage']
            date = datetime.strptime(req['date'], '%Y-%m-%d')
            type = req['type']
            amount = req['amount']
            remark = req['remark']
            client = req['client']

            CashRecord.objects.filter(index=index).update(
                usage=usage,
                type=int(type),
                amount=round(float(amount), 2),
                remark=remark,
                date=date,
                client=client
            )
            return JsonResponse({'code': 200})
        except Exception as error:
            print(error)
    return JsonResponse({'code':500})

