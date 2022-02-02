from django.urls import path
from .views import *

urlpatterns = [
    path('tabledata', getData, name='getdata'),
    path('additem', addItem, name='additem'),
    path('update', updateItem, name='additem'),
    path('delete', deleteItem, name='additem'),
]