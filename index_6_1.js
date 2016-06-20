(function () {

    /* STORE APPLICATION */
    var app = angular.module('store', []);

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is a fabulous gem.',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'imgs/ruby_large.jpg',
                    thumb: 'imgs/ruby_sm.jpg'
                },
                {
                    full: 'imgs/ruby_large1.jpg',
                    thumb: 'imgs/ruby_sm1.jpg'
                },
                {
                    full: 'imgs/ruby_large2.jpg',
                    thumb: 'imgs/ruby_sm2.jpg'
                },
                {
                    full: 'imgs/ruby_large3.jpg',
                    thumb: 'imgs/ruby_sm3.jpg'
                },
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "This product sucks!",
                    author: "tim@hater.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 2,
            description: 'This is another gemmy thingie.',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'imgs/ruby_large1.jpg',
                    thumb: 'imgs/ruby_sm1.jpg'
                },
                {
                    full: 'imgs/ruby_large1.jpg',
                    thumb: 'imgs/ruby_sm1.jpg'
                },
                {
                    full: 'imgs/ruby_large2.jpg',
                    thumb: 'imgs/ruby_sm2.jpg'
                },
                {
                    full: 'imgs/ruby_large3.jpg',
                    thumb: 'imgs/ruby_sm3.jpg'
                },
            ],
            reviews: [
                {
                    stars: 4,
                    body: "I pretty much like!",
                    author: "jenni@doester.com"
                },
                {
                    stars: 2,
                    body: "This product is how i say - not so goo.",
                    author: "max@ontwosides.com"
                }
            ]
        },
    ]

    app.controller('StoreController', function () {
        this.products = gems;
    });

    // app.controller('PanelController', function () {
    //     this.tab = 1;

    //     this.selectTab = function (setTab) {
    //         this.tab = setTab;
    //     };

    //     this.isSelected = function (checkTab) {
    //         return this.tab === checkTab;
    //     };
    // });

    app.controller('ReviewController', function () {
        // create a brand new empty javascript object
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    // first custom directive, the directive use will be <product-title>
    // hence the name in JS is 'productTitle' 
    app.directive('productTitle', function () {
        //define the directive object
        var definition = {};
        definition.restrict = 'E';                         // type of directive (E for element)
        definition.templateUrl = 'product-title.html';     // Url of a template
        return definition;
    });

    app.directive('productPanels', function () {
        var defn = {};
        defn.restrict = 'E';
        defn.templateUrl = 'product-panels.html';
        defn.controller = function () {
            this.tab = 1;

            this.selectTab = function (setTab) {
                this.tab = setTab;
            };

            this.isSelected = function (checkTab) {
                return this.tab === checkTab;
            };
        };
        defn.controllerAs = 'panel';
        return defn;
    });

})();