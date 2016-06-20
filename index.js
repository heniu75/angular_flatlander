(function () {

    /* STORE APPLICATION */
    var app = angular.module('store', []);

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'this is a fabulous gem',
            canPurchase: false,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 2.95,
            description: 'this is another gemmy thingie',
            canPurchase: true,
            soldOut: false
        },
    ]

    app.controller('StoreController', function () {
        this.products = gems;
    });

    /* -------------------- */

    /* COUNTER APPLICATION */

    var countMin = 0;
    var countMax = 5;

    var countApp = angular.module("counterApp", []);
    countApp.controller('counterController', function () {

        this.numbers = [];
        for (var i = countMin; i < countMax; ++i) {
            this.numbers.push(i);
            console.log(i);
        }
    });

    /* -------------------- */

})();