from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from .models import Todo
from .serializers import TodoSerializer



class TaskListViewSets(viewsets.ModelViewSet):

    permission_classes=[IsAuthenticated]
    queryset=Todo.objects.all()
    serializer_class=TodoSerializer

    def get_queryset(self):
        return Todo.objects.filter(author=self.request.user.id)

    def perform_create(self,serializer):
        serializer.save(author=self.request.user)
