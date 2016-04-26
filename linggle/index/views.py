from django.shortcuts import render
from django.http import HttpResponse
import requests
import urllib


def index(request):
    return render(request, 'index/index.html')


def linggleit(request, query):
    url = 'http://linggle.com/query/{}'.format(urllib.quote(query, safe=''))
    r = requests.get(url)
    return HttpResponse(content=r.text, status=r.status_code)
