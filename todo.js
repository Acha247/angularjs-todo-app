angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    $scope.todos =[
    {name:'learn AngularJS', done:false},
    {name:'build an AngularJS app', done:false}
    ];

    $scope.todoText = '';

    function add () {
      if ($scope.todoText.length === 0 || $scope.todoText === ' ') {
        window.alert('Error: The todo is empty, please write something');
      } else {
        $scope.todos.push({
          name: $scope.todoText,
          done: false
       });
        $scope.todoText = '';
      }
    }
    $scope.add = add;

    function remove(todoRemove) {
      var removeText = 'Do you want to remove ' + todoRemove + '?';
      var confirmation = window.confirm(removeText);
      if (confirmation) {
      console.log(todoRemove)
      var provisionalTodoArray = [];
      for (var index = 0; index < $scope.todos.length; index++) {
        if ($scope.todos[index].name !== todoRemove) {
          provisionalTodoArray.push($scope.todos[index]);
        }
      }
      $scope.todos = provisionalTodoArray;
    }
   }
    $scope.remove = remove;
    
    $scope.completed = 0;

    function count () {
      var count = 0;
      for (var index = 0; index < $scope.todos.length; index++) {
        if ($scope.todos[index].done) {
          count = count + 1;
        }
      }
      return count;
    }
    $scope.count = count;
  })
