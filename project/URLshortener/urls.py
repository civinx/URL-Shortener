from django.urls import path
from . import views

urlpatterns = [
    path('api/record/', views.RecordListCreate.as_view()),
]