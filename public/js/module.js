'use strict';

var app = angular.module('routerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/html/about.html',
            controller: 'aboutCtrl'
        })
        .state('list', {
            url: '/list',
            templateUrl: '/html/list.html',
            controller: 'listCtrl'
        })
        .state('lists', {
            url: '/lists/:id',
            templateUrl: '/html/list.html',
            controller: 'onePageCtrl'
        })
        .state('detail', {
                url: '/detail/:url',
                templateUrl: '/html/detail.html',
                // resolve: { // get this data first before we go to the Ctrl
                //     pokemon: function(Pokeapi, $stateParams) {
                //         // return a promise whith will resolve to the person
                //         return Pokeapi.getOneById($stateParams.id)
                //         //  if promised get resolved, then we can go through the state.
                //     }
                // },
                controller: 'detailCtrl'
        }
    )

$urlRouterProvider.otherwise('/');

});
