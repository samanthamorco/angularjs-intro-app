(function () {
  "use strict";

  angular.module("app").controller("exampleCtrl", function($scope) {


    $scope.todoList = [

      {
        text: "Buy chocolate.",
        rating: 5,
      },      
      {
        text: "Eat chocolate.",
        rating: 4,
      },
      {
        text: "Give chocolate to someone.",
        rating: 1,
      }

    ];

    $scope.addTodo = function(todo) {
      if (todo) {
        var todo = {
          text: todoText,
          rating: todoRating,
        };
        $scope.todoList.push(todoText, todoRating);
        $scope.todoText = "";
        $scope.todoRating = "";
      } 
    }

    $scope.ifPositive = function(todo) {
      return review.text.indexOf("stupid") === -1;
    }

    $scope.hideTodo = function(index) {
      $scope.todoList.splice(index, 1);
    }


  });
}());





    // $scope.message = "Hello!";
    // $scope.message2 = "Hola!";
    // $scope.message3 = "Kumusta!";

    // window.$scope = $scope;

    //Mark's reviews 
    // $scope.reviews = ["Angular is awesome", "Angular is da bomb", "Angular is bourgie"];
    // $scope.addReview = function(review) {
    //   $scope.reviews.push(review);
    // }