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

    function remove(todoRemove) {
      console.log(todoRemove)
      var provisionalTodoArray = [];
      for (var index = 0; index < $scope.todos.length; index++) {
        if ($scope.todos[index].name !== todoRemove) {
          provisionalTodoArray.push($scope.todos[index]);
        }
      }
      $scope.todos = provisionalTodoArray;
    }
    $scope.remove = remove;
  })