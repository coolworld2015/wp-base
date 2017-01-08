import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './index.html';
import './css/index.css';
import routesConfig from './src/app/routes'
import init from './src/app/init'
import runHandler from './src/app/runHandler'

import HeaderComponent from './src/components/header/header';
import LoginComponent from './src/components/login/login';
import ItemsComponent from './src/components/items/items';
import UsersComponent from './src/components/users/users';
import AuditComponent from './src/components/audit/audit';
 
angular
	.module('app', [uiRouter])
	.component('headerComponent', HeaderComponent)
	.component('loginComponent', LoginComponent)
	.component('itemsComponent', ItemsComponent)
	.component('usersComponent', UsersComponent)
	.component('auditComponent', AuditComponent)
	.config(routesConfig)
	.run(runHandler)
	.run(init)