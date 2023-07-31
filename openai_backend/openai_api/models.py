from django.db import models
from django.utils.translation import ugettext_lazy as _
# Create your models here.

class Message(models.Model):
    text = models.TextField(_("Text"))
    created_at = models.DateTimeField(_("Created At"), auto_now_add=True)