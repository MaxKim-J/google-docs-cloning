from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('docs/', views.docs_home, name="docs_home"),
    path('sheets/', views.sheets_home, name="sheets_home"),
    path('slides/', views.slides_home, name="slides_home"),
    path('forms/', views.forms_home, name="forms_home"),
]