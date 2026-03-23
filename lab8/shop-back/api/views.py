from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
# Create your views here.

def get_all_products(request):
    products = Product.objects.all()
    data= []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name,
        })
    return JsonResponse(data, safe=False)

def get_product_by_id(request, id):
    try:
        product = Product.objects.get(id = id)
        data={
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name,
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'})

def get_category_list(request):
    category = Category.objects.all()
    data = []
    
    for c in category:
        data.append({
            'id': c.id,
            'name': c.name,
        })
    return JsonResponse(data, safe=False)

def get_category_by_id(request, id):
    try:
        category = Category.objects.get(id = id)
        data = {
            'id': category.id,
            'name': category.name,
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Product not found'})
    
def get_category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': category.id,
                'category_name': category.name,
            })
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})