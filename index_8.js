(function () {

    /* STORE APPLICATION */
    var app = angular.module('store', ['store-products']);

    // controller with dependency on built in service
    app.controller('StoreController', [ '$http', function ($http) {
       var store = this;
       // since page will load, init products to empty array
       store.products = [];

       // get list of products from remote json file
       $http.get('/products.json').success(function(data){
            store.products = data;
       });
    }]);

    app.controller('ReviewController', function () {
        // create a brand new empty javascript object
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();