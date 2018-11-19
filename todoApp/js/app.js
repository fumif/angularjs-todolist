'use strict';
angular.module('todoApp', [])
    .controller('mainCtrl', ['$scope', '$filter', function($scope, $filter) {
        $scope.todos = [];
        $scope.newName = '';


        $scope.addTodos = function() {

            $scope.todos.push({
                name: $scope.newName,
                completed: false
            });

            return $scope.newName = '';
        };

        $scope.deleteTodo = function($index) {
            $scope.todos.splice($index, 1);
        };

        $scope.remaining = function() {
            var i = 0;
            angular.forEach($scope.todos, function(todo) {
                i += !todo.completed;
            })
            return i;
        };

        $scope.selectAll = false;
           $scope.toggleAll = function () {
            if ($scope.selectAll === false) {
                angular.forEach($scope.todos,function(todo)  {
                    todo.completed = true;
                });
                $scope.selectAll = true;
            } else {
                angular.forEach($scope.todos, function(todo) {
                    todo.completed = false;
                });
                $scope.selectAll = false;
            }
        };


        $scope.removeChecked = function() {
            $scope.todos = $filter('filter')($scope.todos, { 'completed': false });
            return $scope.todos;
        };


        $scope.addClass = function() {
            $scope.class = "text";
        }

    }]);
