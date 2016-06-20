(function () {

    /* -------------------- */
    /* CLICKER APPLICATION */

    // *** WORKING SAMPLE 1
    // var app = angular.module("clicker", [])
    // .controller('myController', ['$scope', function($scope) {

    //     // variable scoped to this controller
    //     $scope.username= 'Hadouken Shoryuken';

    //     // method scoped to this controller
    //     $scope.sayHello = function (text) {
    //         alert(text);
    //     };

    // }]);

    // *** WORKING SAMPLE 2
    // var app = angular.module("clicker", []);
    // app.controller('myController', ['$scope', function ($scope) {

    //     // variable scoped to this controller
    //     $scope.username = 'Hadouken Shoryuken';

    //     // method scoped to this controller
    //     $scope.sayHello = function (text) {
    //         alert(text);
    //     };

    // }]);

    // *** WORKING SAMPLE 3
    // var app = angular.module("clicker", []);
    // app.controller('MyController', ['$scope', function ($scope) {

    //     // variable scoped to this controller
    //     this.username = 'Hadouken Shoryuken';

    //     // method scoped to this controller
    //     this.sayHello = function (text) {
    //         alert(text);
    //     };

    // }]);

    // *** WORKING SAMPLE 4 - this requires the use of the 'ng-controller="MyController as myController" syntax
    // var app = angular.module("clicker", []);
    // app.controller('MyController', ['$scope', function ($scope) {

    //     // variable scoped to this controller
    //     this.username = 'Hadouken Shoryuken';

    //     // method scoped to this controller
    //     this.sayHello = function (text) {
    //         alert(text);
    //     };

    // }]);

    // *** WORKING SAMPLE 5 - The best, most simple example!
    var app = angular.module("clicker", []);
    app.controller('MyController', function () {

        // create a method scoped to this controller, which may be invoked
        this.sayHello = function (text) {
            alert(text);
        };

    });

    /* -------------------- */

})();