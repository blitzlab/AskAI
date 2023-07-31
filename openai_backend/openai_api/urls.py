from django.urls import path, include
from rest_framework.routers import DefaultRouter
from openai_api.views import openai_endpoint, ChatView


app_name = "home_api"

router = DefaultRouter()

# router.register("chat", ChatView, basename="chat")



urlpatterns = [
    path('openai_/', openai_endpoint, name='openai_endpoint'),
    path('', ChatView.as_view(), name='chat'),
    # path("", include(router.urls)),
]
