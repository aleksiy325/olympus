from django.views.generic import TemplateView

class BaseView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
    	context = super(BaseView, self).get_context_data(**kwargs)
    	return context