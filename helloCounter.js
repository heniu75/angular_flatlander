(function () {

    /* -------------------- */
    /* COUNTER APPLICATION */

    var countMin = 0;
    var countMax = 15;

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