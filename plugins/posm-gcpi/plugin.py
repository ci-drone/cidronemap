from app.plugins import PluginBase, Menu, MountPoint
from django.shortcuts import render

class Plugin(PluginBase):

    def main_menu(self):
        return [Menu("Interface GCP", self.public_url(""), "fa fa-map-marker fa-fw")]

    def app_mount_points(self):
        return [
            MountPoint('$', lambda request: render(request, self.template_path("app.html"), {'title': 'Editeur GCP'}))
        ]


