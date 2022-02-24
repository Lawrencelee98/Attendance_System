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
        try:
            user = User.objects.filter(username=username).first()
            if password == user.password:
                # 使用bson来生成token
                token = str(bson.objectid.ObjectId()) + str(random.randint(1, 1000))
                return JsonResponse({'code': 200, 'token': token, 'nickname': user.nickname})
        except Exception as error:
            print(error)
            return JsonResponse({'code': 500})
    return JsonResponse({'code': 500})


def post(request):
    request.session['test'] = '123'
    print(request.session['test'])
    return HttpResponse("200")

def register(request):
    data = json.loads(request.body)
    username = data.get('username', '')
    password = data.get('password', '')
    nickname = data.get('nickname', '')

    if username and password:
        password = hashlib.md5(password.encode('utf-8')).hexdigest()
        try:
            User.objects.create(
                username=username,
                password=password,
                nickname=nickname
            )
            response_code = 200
        except Exception as error:
            response_code = 500
            print(error)

        return JsonResponse({'code':response_code})
