'use strict';

angular.module('appModule')
    .controller('gpaCtrl', function($http){
        console.log("gpa controller loaded!");
        var self = this;

        self.nameField = "";
        self.gradeField = "";
        self.creditField = 0;

        // Normally, this would be stored in the db
        self.data = [];

        self.getData = function(){
            $http.get('api/gpa').success(function(gpas) {
                self.data = gpas;
            });
        };

        self.getData();

        self.addData = function(){
            if((self.nameField.length >= 1) && (self.gradeField.length > 0) && (self.creditField >= 1)) {
                $http.post('api/gpa', {name: self.nameField, grade: self.gradeField, credits: self.creditField}).success(function(){
                    self.getData();
                });
                self.nameField = "";
                self.gradeField = "";
                self.creditField = 0;
            }
        };

        self.removeData = function(index){
            $http.delete('/api/gpa/' + self.data[index].gpa_id).success(function(){
                self.getData();
            });
        };
    });