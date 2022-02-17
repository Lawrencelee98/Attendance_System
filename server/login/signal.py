from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User


@receiver(post_save, sender=User)
def save_user_password(sender, instance, **kwargs):
    print("signal : save_user_password")
    print(kwargs)