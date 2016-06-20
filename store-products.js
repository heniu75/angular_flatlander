(function(){

    var app = angular.module('store-products', [] );
    
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