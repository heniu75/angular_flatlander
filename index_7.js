(function () {

    /* STORE APPLICATION */
    var app = angular.module('store', ['store-products']);

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