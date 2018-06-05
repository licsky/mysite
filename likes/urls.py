from django.urls import path
from . import views

urlpatterns = [
    #http://127.0.0.1:8000/blog/1
    path('like_change', views.like_change, name="like_change"),
]
