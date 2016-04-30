'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($q, $http) {
    console.log('homeCtrl loaded');
});

app.controller('listCtrl', function($scope, Pokeapi, $state) {
    console.log('listCtrl loaded');
    Pokeapi.getAll()
        .then(pokemList => {
            $scope.pokemList = pokemList.data.pokemon_entries;
        })
        .catch(err => {
            $state.go('home')
        })
})

app.controller('detailCtrl', function($scope, Pokeapi, $stateParams, $state) {
    Pokeapi.getOneById($stateParams.id)
        .then(pokemon => {
            console.log('pokemon: ', pokemon);
            $scope.pokemon = pokemon.data;
        })
        .catch(err => {
            $state.go('list')
        })
})
