from django.shortcuts import render

# Create your views here.
def docs_home(request):
    print("docs")
    return render(request, 'products/docs_home.html')

def sheets_home(request):
    print("sheets")
    return render(request, 'products/sheets_home.html')

def slides_home(request):
    return render(request, 'products/slides_home.html')

def forms_home(request):
    return render(request, 'products/forms_home.html')