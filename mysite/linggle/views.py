from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
 
def hello_world(request):
    return render(request, 'index.html')

# def linggleit(query):
# 	if 'search-bar' in request.GET and request.GET['search-bar'] != '':
# 		return HttpResponse('test' + request.GET['search-bar'])
# 	else:
# 		return render(request, 'index.html')

