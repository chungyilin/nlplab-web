from django.shortcuts import render
from django.http import HttpResponse
import requests
import urllib

API_URL = 'http://ironman.nlpweb.org:9487/?search={}'


def index(request):
    return render(request, 'index/index.html')


def itri(request):
    return render(request, 'itri/index.html')


# def linggleit(request, query):
#     url = 'http://linggle.com/query/{}'.format(urllib.quote(query, safe=''))
#     r = requests.get(url)
#     return HttpResponse(content=r.text, status=r.status_code)


def linggleit(request, query):
    r = requests.get(API_URL.format(query))
    return HttpResponse(content=r.text, status=r.status_code)
