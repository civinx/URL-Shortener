from django.shortcuts import render
from URLshortener.models import Record
from URLshortener.serializers import RecordSerializer
from rest_framework import generics


class RecordListCreate(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer