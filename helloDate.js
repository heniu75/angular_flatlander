(function () {

    /* APPLICATION */
    var app = angular.module('myApp', []);

    // first controller changes data in surrounding scope
    app.controller('FirstController', ['$scope', function ($scope) {
        $scope.itsADate = new Date();
    }]);

    // this controller sets the value of the current date into it's only internal scope 
    app.controller('EncapsulatedController',  function () {
        this.encapsulatedDate = new Date();
    });

    /* -------------------- */

})();