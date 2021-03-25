import angular from 'angular';
import uiRouter from 'angular-ui-router';
import featureFlagComponent from './featureFlag.component';

let featureFlagModule = angular.module('featureFlag', [
  uiRouter
])

.component('featureFlag', featureFlagComponent)

.name;

export default featureFlagModule;
