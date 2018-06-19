function TodoController($scope) {

    $scope.item = {};

    $scope.items = [
        // {task: 'Buy', done: false},
        // {task: 'Debug', done: false}
    ];

    $scope.addItem = function () {
        $scope.items.push({task: $scope.item.task, done: false});
        $scope.item.task = '';
    };

    $scope.editItem = function(index){
        $scope.item = $scope.items[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
    };

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
    };
}