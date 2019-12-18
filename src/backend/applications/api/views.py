from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from applications.player.models import Player, Guild
from applications.authentication.models import Account
from . import serializers
from .authentication import AUTH_HEADER_TYPES
from .exceptions import InvalidToken, TokenError
from .pagination import RankinPageNumber


class TokenViewBase(generics.GenericAPIView):
    permission_classes = ()
    authentication_classes = ()

    serializer_class = None

    www_authenticate_realm = 'api'

    def get_authenticate_header(self, request):
        return '{0} realm="{1}"'.format(
            AUTH_HEADER_TYPES[0],
            self.www_authenticate_realm,
        )

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class BaseInfo(generics.GenericAPIView):
    permission_classes = ()
    authentication_classes = ()
    model_class = None

    def get(self, request, *args, **kwargs):
        try:
            self.model_class.objects.get(login=kwargs.get('username'))
            return Response({'status': True})
        except self.model_class.DoesNotExist:           
            return Response({'status': False}, status=status.HTTP_404_NOT_FOUND)


class TokenObtainView(TokenViewBase):
    """
    Takes a set of user credentials and returns an access and refresh JSON web
    token pair to prove the authentication of those credentials.
    """
    serializer_class = serializers.TokenObtainPairSerializer


class TestPermision(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        return Response({'username': user.login})


class RankingGuilds(generics.ListAPIView):
	queryset = Guild.objects.all().order_by('-level','-exp','-win', '-ladder_point')
	serializer_class = serializers.RankingGuildSerializer
	pagination_class = RankinPageNumber


class RankingPlayers(generics.ListAPIView):
	queryset = Player.objects.all().exclude(Q(name__contains='[')).order_by('-level','-exp')
	serializer_class = serializers.RankingPlayerSerializer
	pagination_class = RankinPageNumber


class Info(BaseInfo):
    permission_classes = (AllowAny,)
    model_class = Account


class RegisterGeneric(generics.CreateAPIView):
    queryset = Account.objects.all()
    serializer_class = serializers.RegisterSerializer
    permission_classes = (AllowAny,)


class CurrentUserView(APIView):
    serializer_class = serializers.CurrentUserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)
