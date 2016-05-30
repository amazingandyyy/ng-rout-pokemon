'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($q, $http) {
    console.log('homeCtrl loaded');
});

app.controller('listCtrl', function($scope, Pokeapi, $state) {
    console.log('listCtrl loaded');
    Pokeapi.getAllPage()
        .then(pagesList => {
            console.log('pagesList: ', pagesList);
            $scope.pagesList = pagesList.data.results;
        })
        .catch(err => {
            $state.go('home')
        })
        // $scope.pokeList = pokeOnePage.data.pokemon_entries;
    Pokeapi.getAll()
        .then(pokeList => {
            console.log('pokeList: ', pokeList);
            $scope.pokeList = pokeList.data.pokemon_entries;
        })
        .catch(err => {
            $state.go('home')
        })
});
app.controller('onePageCtrl', function($scope, Pokeapi, $stateParams) {
    // console.log('onePageCtrl loaded');
    Pokeapi.getOnePage($stateParams.id)
        .then(pokeListOnePage => {
            console.log('pokeListOnePage: ', pokeListOnePage);
            $scope.pokeList = pokeListOnePage.data.pokemon_entries;

            Pokeapi.getAllPage()
                .then(pagesList => {
                    console.log('pagesList: ', pagesList);
                    $scope.pagesList = pagesList.data.results;
                })
                .catch(err => {
                    $state.go('home')
                })
        })
        .catch(err => {
            $state.go('list')
        })
});

app.controller('detailCtrl', function($scope, Pokeapi, $stateParams, $state) {
console.log('$stateParams.url: ', $stateParams.url);
    Pokeapi.getOneById($stateParams.url)
        .then(pokemon => {
            console.log('pokemon pkay: ');
            $scope.pokemon = pokemon.data;
        })
        .catch(err => {
            $state.go('list')
        })
})
