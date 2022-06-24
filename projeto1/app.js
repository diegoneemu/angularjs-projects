(function () {
    'use strict';

    angular.module('TodoApp', [])
    .controller('TodoController', TodoController)

    TodoController.$inject = ['$scope'];
    function TodoController($scope){
      $scope.todo = [];

    $scope.addTodoTask = function() {
     $scope.todo.push($scope.taskTodo);
     $scope.taskTodo = '';
     return console.log($scope.todo);
    };
  }

})();