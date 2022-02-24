from django.urls import path
from .views import *

urlpatterns = [
    path('', auth, name='authenticate'),
    path('post', post, name='post'),
    path('register', register, name='register')
]