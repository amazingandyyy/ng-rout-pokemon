'use strict';

var app = angular.module('routerApp');

app.service('Pokeapi', function($q, $http) {

    this.getAllPage = () => {
        return $http.get(`http://pokeapi.co/api/v2/pokedex/`);
    }
    this.getOnePage = (id) => {
        return $http.get(`http://pokeapi.co/api/v2/pokedex/${id}`);
    }
    this.getAll = () => {
        return $http.get(`http://pokeapi.co/api/v2/pokedex/1/`);
    }
    this.getOneById = (url) => {
        console.log('url: ', url);
        // return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
        return $http.get(`${url}`).then((pokemon)=>{
            // if(err) return console.error(err);;
            console.log('pokemonnnnnn: ', pokemon);
            return $http.get(pokemon.data.varieties[0].pokemon.url);
            // pokemon.data.varieties[0].pokemon.url
        }, err=>{
            return false;
        })
    }

});
