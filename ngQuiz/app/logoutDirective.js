app
  .directive("logout", [
    function () {
      return {
        restrict: 'E',
        scope: {},
        template: '<div> <button class="btn btn-success" ng-click ="logout();" >Log Out </button> </div>',
        replace: 'true',
        controller: ['$scope', '$http', '$window','$location',
          function($scope, $http, $window,$location ) {
            $scope.loginError = false;
            $scope.logout = function () {
              $scope.loginError = false;
         
             $location.url('/login');
            console.log('log out form screen ');
        
            }
          }
        ]
      }
    }])
