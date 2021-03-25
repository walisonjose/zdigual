import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import FeatureFlag from './featureFlag/featureFlag';

let componentModule = angular.module('app.components', [
  Home,
  About,
  FeatureFlag
])

.name;

export default componentModule;
