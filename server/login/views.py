from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import json
from .models import User
import hashlib
import bson
import random


# Create your views here.
def auth(request):
    if request.method == 'POST':
        print(request.body)
        auth_data = json.loads(request.body)
        username = auth_data.get('username', '')
        password = auth_data.get('password', '')
        password = hashlib.md5(password.encode('utf-8')).hexdigest()
        user = User.objects.filter(username=username).first()
        print(user.password,' ', password)
        if password == user.password:
            # 使用bson来生成token
            print("right")
            token = str(bson.objectid.ObjectId())+str(random.randint(1, 1000))
            request.session['user'] = username
            return JsonResponse({'code': 200, 'token': token})
    return JsonResponse({'code': 500})


def post(request):
    request.session['test'] = '123'
    print(request.session['test'])
    return HttpResponse("200")