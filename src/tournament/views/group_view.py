from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from tournament.serializers import GroupSerializer
from tournament.models import Group



class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        serialized =  self.serializer_class(data=request.data)
        if serialized.is_valid():
            name = serialized.data['name']
            private  = False
            Group.objects.create_group(name, request.user, private)
            return Response("{}", status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)