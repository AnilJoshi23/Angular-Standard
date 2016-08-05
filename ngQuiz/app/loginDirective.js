
app
  .directive("login", [
    function () {
      return {
        restrict: 'E',
        scope: {},
        template: '<div class="row"> <div class="col-xs-12"> <form name="loginForm"> <div class="form-group"> <label for="username">Username</label> <input type="text" name="username" ng-model="username" required="required" class="form-control"/> </div> <div class="form-group"> <label for="password">Password</label> <input type="password" name="password" ng-model="password" required="required" class="form-control"/> </div> <button type="submit" ng-disabled="!loginForm.$valid" ng-class="{\'btn-default\':!loginForm.$valid,\'btn-success\':loginForm.$valid}" ng-click="login()" class="btn login">Login</button> <span ng-show="loginError && !loginForm.$valid" class="label label-danger"> <b>Error With Login</b> Please try again. </span></form> </div> </div>',
        replace: 'true',
        controller: ['$scope', '$http', '$window','$location',
          function($scope, $http, $window,$location ) {
            $scope.loginError = false;
            $scope.login = function () {
              $scope.loginError = false;
         
             $location.url('/home');
            console.log('here in directive');
        
            }
          }
        ]
      }
    }])