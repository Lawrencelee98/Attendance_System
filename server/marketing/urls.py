from django.urls import path
from .views import *

urlspatterns = [
    path('tabledata', getData, name='getdata'),
    path('additem', addItem, name='additem'),
]