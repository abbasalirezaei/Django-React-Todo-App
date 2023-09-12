from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Todo
        fields =['id','task', 'author'  ,'completed','created','updated']
        # read_only_fields=['author']
