# -*-coding=utf8-*-
from torngas.helpers.route_helper import url, RouteLoader
from . import SUBAPP_NAME
route = RouteLoader(path='/', subapp_name='Main')

urls = route.urlhelper(
    url('Index', r'/', 'views.main_handler.Main')
)

if __name__ == '__main__':
    pass