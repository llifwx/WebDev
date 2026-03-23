from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_all_products),
    path('products/<int:id>/', views.get_product_by_id),
    path('categories/', views.get_category_list),
    path('categories/<int:id>/', views.get_category_by_id),
    path('categories/<int:id>/products/', views.get_category_products),
]