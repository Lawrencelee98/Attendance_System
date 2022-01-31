from django.urls import path
from .views import *

urlpatterns = [
    path('tabledata', getData, name='getdata'),
    path('additem', addItem, name='additem'),
    path('uploadfile/<int:index>', uploadfile, name='uploadfile'),
    path('downloadfile/<int:index>', downloadfile, name='downloadfile')
]
