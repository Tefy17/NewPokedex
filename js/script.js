// Write your code here
var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Pokebola = [];
	for(var m=1; m>=500;m++){

$http({
	method: "GET",
	url:"https://pokeapi.co/api/v2/25"+m
}).then(Function success(x){
	$scope.Pokebola-push(x);
    })
}

})