from django.contrib.auth.models import User
from tournament.models import Group
from rest_framework import serializers
 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        write_only_fields = ('password',)
        read_only_fields = ('is_staff', 'is_superuser', 'is_active', 'date_joined')

class GroupSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)
    class Meta:
        model = Group
        fields = ('name', 'private')
        read_only_fields = ('admins', 'owner')
