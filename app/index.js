import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './index.html';
import './css/index.css';
import routesConfig from './src/app/routes'
import init from './src/app/app'

import HeaderComponent from './src/components/header/header';
import ItemsComponent from './src/components/items/items';
import UsersComponent from './src/components/users/users';
import LoginComponent from './src/components/login/login';
 
angular
	.module('app', [uiRouter])
	.component('headerComponent', HeaderComponent)
	.component('itemsComponent', ItemsComponent)
	.component('usersComponent', UsersComponent)
	.component('loginComponent', LoginComponent)
	.config(routesConfig)
	.run(init);