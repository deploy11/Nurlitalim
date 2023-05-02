from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=500)
    def __str__(self):
        return self.name
class Dars(models.Model):
    title = models.CharField(max_length=500)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    vidio = models.CharField(max_length=1000)
    def __str__(self):
        return self.title
class Book(models.Model):
    image = models.CharField(max_length=1000)
    file = models.CharField(max_length=1000)
    title = models.CharField(max_length=500)
    def __str__(self):
        return self.title
class Contact(models.Model):
    FirstName = models.CharField(max_length=500)
    LastName = models.CharField(max_length=500)
    Subject = models.TextField()
    def __str__(self):
        return self.FirstName