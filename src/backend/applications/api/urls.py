# Copyright (c) 2017-2018 luispenagos91@gmail.com
# Distribuido bajo la licencia MIT Software Licence
# Mas informacion http://www.opensource.org/licenses/mit-license.php

# imporacion por defecto
from django.urls import path

from .views import TokenObtainView, TestPermision

urlpatterns = [
    path('token/', TokenObtainView.as_view(), name='login'),
    path('test/', TestPermision.as_view(), name='test')
]
