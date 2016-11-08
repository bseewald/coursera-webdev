(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.dishesList = "";
    $scope.dishesQuantity = -1;

    $scope.checkIfTooMuch = function(){
      var aux = quantityOfDishes($scope.dishesList);
      $scope.dishesQuantity = aux;
    };

    function quantityOfDishes(string){
      var quantityOfDishesAux = 0;
      var arrayOfDishes = string.split(',');
      for(var i = 0; i < arrayOfDishes.length; i++){
        if(arrayOfDishes[i] != ""){
          quantityOfDishesAux +=1;
        }
      }
      return quantityOfDishesAux;
    }

    $scope.sayMessage = function(){
      if($scope.dishesQuantity == 0){
        return "Please enter data first!"
      }
      else if($scope.dishesQuantity > 0 && $scope.dishesQuantity < 4){
        return "Enjoy!";
      }
      else if($scope.dishesQuantity >= 4){
        return "Too much!"
      }
    };
  }

})();
