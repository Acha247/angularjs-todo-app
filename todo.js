angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    $scope.todos =[];
    $scope.todoText = '';
    $scope.archived = [];
    function generateUUID() {
      var d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
          d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }

    function add () {
      if ($scope.todoText.length === 0 || $scope.todoText === ' ') {
        window.alert('Error: The todo is empty, please write something');
      } else {
        $scope.todos.push({
          name: $scope.todoText,
          done: false,
          uuid: generateUUID(),
          archived: false
       });
        $scope.todoText = '';
      }
    }

    $scope.add = add;

    function remove(removeObject) {
      var removeText = 'Do you want to remove ' + removeObject.name + '?';
      var confirmation = window.confirm(removeText);
      if (confirmation) {
      $scope.todos = $scope.todos.filter(function(val) {
        val.uuid = removeObject.uuid;
      });
    }
  }

    $scope.remove = remove;

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

    function getTotal () {
      return $scope.todos.length;
    }

    $scope.getTotal = getTotal;

    function archive (activity) {
      $scope.todos = $scope.todos.map(function(val) {
        if (val.uuid === activity.uuid) {
          val.archived = true;
        }
        return val;
      });
    }

    $scope.archive = archive;

    function unarchive(activity) {
      $scope.todos = $scope.todos.map(function(val) {
        if (val.uuid === activity.uuid) {
          val.archived = false;
        }
        return val;
      });
    }

    $scope.unarchive = unarchive;
  })
