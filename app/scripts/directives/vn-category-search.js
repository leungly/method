/**
 * @ngdoc directive
 * @name Volusion.methodApp.directive:vnCategorySearch
 * @restrict EA
 * @requires category object from the api response at the product endpoint.
 * @scope
 * @description
 *
 * Given a product query category object this creates the UI for narrowing products by categories.
 * Allow parent controller to be updated with user controlled actions select/de-select
 *
 * @usage
 <div vn-category-search facets="facets"></div>

 -OR-------------------------------------

 <vn-category-search facets="facets"></vn-category-search>
 *
 *
 * @example
 <example module="Volusion.methodApp" deps="">
 TODO: Insert example html and javascript.
 </example>
 */

angular.module('methodApp')
    .directive('vnCategorySearch', function () {
        'use strict';
        return {
            templateUrl: '/views/partials/vn-category-search.html',
            restrict: 'AE',
            scope: {
                categories: '='
            },
            link    : function postLink(scope) {
                scope.$watch('categories', function (categories) {
//                    console.log(categories[0].subCategories);
                    // Gaurd against the error message for while categories is not defined.
                    if( !categories || !categories[0]) {
                        return;
                    } else {
                        // Navigating / parsing the api response to get the data
                        // Optimization opportunity: handle this in the api service so directive doesn't have to parse
                        // and just return an object or even better create a category model object.
                        scope.categories = categories[0];
                        scope.subCategories = categories[0].subCategories;
                    }
                });
            }
        };
    });