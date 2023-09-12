from rest_framework import serializers
from todo.models import Task

class TodoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields =['id','task', 'author'  ,'completed','created','updated']
        # read_only_fields=['author']
