from django.db import models

# Create your models here.


class Record(models.Model):
    long_name = models.CharField(max_length=100)
    short_name = models.CharField(max_length=100)
    create_time = models.DateTimeField(auto_now_add=True)
