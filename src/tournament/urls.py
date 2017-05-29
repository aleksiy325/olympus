from django.conf.urls import url, include
from tournament.views.user_view import UserViewSet
from tournament.views.group_view import GroupViewSet
from rest_framework.authtoken import views

urlpatterns = [
	url(r'^group/create/', GroupViewSet.as_view({'post': 'create'})),
	url(r'^createuser/', UserViewSet.as_view({'post': 'create'})),
	url(r'^token/$', views.obtain_auth_token, name='token'),
]
