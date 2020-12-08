from . import views
from django.urls import path

urlpatterns = [
    path('', views.PizzeriaListAPIView.as_view(), name="pizzeria_list"),
    path('<int:id>/', views.PizzeriaRetrieveAPIView.as_view(), name="pizzeria_detail"),

]
