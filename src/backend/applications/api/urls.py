# Copyright (c) 2017-2018 luispenagos91@gmail.com
# Distribuido bajo la licencia MIT Software Licence
# Mas informacion http://www.opensource.org/licenses/mit-license.php

# imporacion por defecto
from django.urls import path

from .views import TokenObtainView, TestPermision, RankingGuilds, RankingPlayers, Info, RegisterGeneric

urlpatterns = [
    path('token/', TokenObtainView.as_view(), name='login'),
    path('signup/', RegisterGeneric.as_view(), name='signup'),
    path('guild_rank/', RankingGuilds.as_view(), name='guild_rank'),
    path('player_rank/', RankingPlayers.as_view(), name='player_rank'),
    path('info/<str:username>', Info.as_view(), name='info')
]
