angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    $scope.todos =[
    {text:'learn AngularJS', done:true},
    {text:'build an AngularJS app', done:false}
    ];
  })