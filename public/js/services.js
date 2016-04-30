'use strict';

var app = angular.module('routerApp');

app.service('Pokeapi', function($q, $http) {

    this.getAll = () => {
        return $http.get('http://pokeapi.co/api/v2/pokedex/1/');
    }
    this.getOneById = (id) => {
        return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
    }

});
