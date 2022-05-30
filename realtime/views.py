from django.http import HttpResponse
from django.template import loader
import json
from random import randint
from time import sleep

def index(request):
  template = loader.get_template('realtime2.html')
#   context = {
#     'firstname': 'VAHID',
#   }
  for i in range(1000):
    context = {'firstname': str(randint(-20, 20))}
    return HttpResponse(template.render(context, request)) 

def index2(request):
  template = loader.get_template('realtime2.html')