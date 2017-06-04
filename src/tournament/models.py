from django.db import models
from django.conf import settings
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token 


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class GroupManager(models.Manager):
    def create_group(self, name, owner, private):
        group = self.create(name=name, private=private, owner=owner)
        group.members.add(owner)
        group.admins.add(owner)
        group.save()
        return group

class Group(models.Model):
    objects = GroupManager()
    name = models.CharField(max_length=60)
    members = models.ManyToManyField(User, related_name='member_of')
    owner = models.ForeignKey(User, related_name='owner_of', null=True)
    admins = models.ManyToManyField(User, related_name='admin_of')
    private = models.BooleanField(default=True)

