angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    $scope.todos =[
    {name:'learn AngularJS', done:true},
    {name:'build an AngularJS app', done:false}
    ];

    function add () {
      $scope.todos.push({
        name: $scope.todoText,
        done: false
      });
      $scope.todoText = '';
    }
    $scope.add = add;
  })