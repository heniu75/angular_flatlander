(function () {

    /* APPLICATION */
    var app = angular.module('myApp', []);
    app.controller('myController', ['$scope', function ($scope) {
        $scope.date = new Date();
    }]);

    /* -------------------- */

})();