from django.db import models


from django.contrib.auth import get_user_model

User=get_user_model()

# Create your models here.

class Todo(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True
    )
    task = models.CharField(max_length=100)
    isEditing= models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    
    def __str__(self):
        return self.task