from django.urls import path
from . import views

urlpatterns = [
    #http://127.0.0.1:8000/blog/1
    path('update_comment', views.update_comment, name='update_comment'),
]
