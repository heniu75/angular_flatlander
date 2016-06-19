( function() {
var app = angular.module('store', []);
app.controller( 'myController', ['$scope', function($scope) {
    $scope.date = new Date();
}]);

var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description : 'this is a fabulous gem'
}

app.controller('StoreController', function(){
    this.product = gem;
});

})();