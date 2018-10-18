from rest_framework import serializers
from URLshortener.models import Record

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('long_name', 'short_name', 'create_time')

