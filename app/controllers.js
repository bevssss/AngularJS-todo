function TodoController($scope) {

    $scope.item = {};

    $scope.items = [];

    $scope.addItem = function () {
        $scope.items.push({task: $scope.item.task, done: false});
        $scope.item.task = '';
    };

    $scope.editItem = function(index){
        $scope.item = $scope.items[index];
        $scope.edit = true;
    };

    $scope.saveChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
    };

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
    };
}