var myApp = angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.todos = [
            {id: 111, action: "a", complete: true, place: "home"},
            {id: 222, action: "b", complete: true, place: "store"},
            {id: 333, action: "c", complete: false, place: "home"},
            {id: 444, action: "d", complete: true, place: "store"}
        ];
        $scope.addNewItem = function (newItem) {
            if (angular.isDefined(newItem) && angular.isDefined(newItem.action) && angular.isDefined(newItem.location)) {
                $scope.todos.push({
                    action: newItem.action + "(" + newItem.location + ")"
                })
            }

        }

        $scope.addUser = function (userDetails) {
            if (myForm.$valid) {
                $scope.message = userDetails.name + "(" + userDetails.email + ")(" + userDetails.agreed + ")";
            } else {
                $scope.showValidation = true;
            }

        }
        $scope.message = "Ready";

        $scope.getError = function (error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "please enter a value"
                } else if (error.email) {
                    return "please enter a valid email address"
                }
                0
            }
        }

        $scope.requireValue = true;
        $scope.matchPattern = new RegExp("^[a-z]")//RegExp 对象表示正则表达式

    });