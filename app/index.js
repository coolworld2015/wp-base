import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './index.html';
import './css/index.css';
import routesConfig from './src/app/routes'

import HeaderComponent from './src/components/header/header';
import ItemsComponent from './src/components/items/items';
 
angular
	.module('app', [uiRouter])
	.component('headerComponent', HeaderComponent)
	.component('itemsComponent', ItemsComponent)
	.config(routesConfig);