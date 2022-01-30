from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import os
import bson
import json
from .models import *
from django.conf import settings
# Create your views here.
'''
    index = models.AutoField(primary_key=True)
    usage = models.CharField(max_length=50)
    type = models.IntegerField()
    amount = models.FloatField()
    remark = models.CharField(max_length=100)
    file = models.FileField(upload_to='file')
'''


def addItem(request):
    if request.method == 'POST':
        req = json.loads(request.body)
        usage = req['usage']
        date = datetime.strptime(req['date'], '%Y-%m-%dT%H:%M:%S.%fZ')
        type = req['type']
        amount = req['amount']
        remark = req['remark'],
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
    if data['start']=='' and data['end']=='':
        records = CashRecord.objects.all().order_by("-date")
        response = []
        for item in records:
            response.append({'id': item.index,
                             'date': item.date,
                             'usage': item.usage,
                             'type': item.type,
                             'amount': item.amount,
                             'remark': item.remark,
                             'client': item.client
                             })
        return JsonResponse({'tableData':response}, safe=False)
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

    # 在这里判断一下文件的大小是否合规，如果太大有可能是恶意文件
    # 在前端也判断一下文件的大小,如果文件大于10个字节则放弃上传
    if file.size > 1024*1024*10:
        return JsonResponse({'code': 500})

    # 获取用户的id，现在先随便生成一个值
    user_id = '61f54c0cca1e7af8f8f0f0e6'

    # 生成对应用户下的文件夹，没有的话创建
    file_path = os.path.join(settings.BASE_DIR, 'media/'+user_id)
    if not os.path.exists(file_path):
        os.makedirs(file_path)

    # 生成文件名，用bson或者hash都可以
    filename = '61f4d1fcca1e7ae288fb1e6d.jpg'

    # 有了文件名之后就可以生成保存的完整路径
    fullfilepath = os.path.join(file_path, filename)

    # 写入数据
    with open(fullfilepath, 'wb') as fw:
        for ck in file.chunks():
            fw.write(ck)

    # 根据伪静态的id来查找对应的数据，将数据保存的模型里
    cashrecord = CashRecord.objects.filter(index=index)
    cashrecord.file = fullfilepath

    return JsonResponse({"code": 200})