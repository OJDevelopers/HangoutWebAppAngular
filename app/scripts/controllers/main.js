'use strict';

/**
 * @ngdoc function
 * @name hangoutWebAppAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hangoutWebAppAngularApp
 */
angular.module('hangoutWebAppAngularApp')
  .controller('MainCtrl', function ($scope, LxDialogService, LxNotificationService) {

      $scope.opendDialog = function (dialogId) {
          LxDialogService.open(dialogId);
      };

      $scope.closingDialog = function () {
          LxNotificationService.info('Se cierra el modal');
      };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
