from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from tournament.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request):
        serialized =  self.serializer_class(data=request.data)
        if serialized.is_valid():
            User.objects.create_user(
                serialized.data['username'],
                serialized.data['email'],
                serialized.data['password']
            )
            return Response("{}", status=status.HTTP_201_CREATED)

        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)