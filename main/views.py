from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    category = Category.objects.all()
    book = Book.objects.all()
    context = {
        "category":category,
        "book":book,
    }
    return render(request,'index.html',context)
def contact(request):
    category = Category.objects.all()
    if request.method == 'POST':
        Contact.objects.create(
            FirstName = request.POST['firstname'],
            LastName = request.POST['lastname'],
            Subject = request.POST['subject']
        )
    return render(request,'contact.html',{"category":category})
def categores(request):
    qi = request.GET.get('category')
    category = Category.objects.all()
    if category == None:
        pass
    else:
        dars = Dars.objects.filter(category__name=qi)
    return render(request,'darsalar.html',{'dars':dars,'category':category})
def about(request):
    category = Category.objects.all()
    return render(request,'about.html',{"category":category})