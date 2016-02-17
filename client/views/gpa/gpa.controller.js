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

        self.color = "color:black";

        self.getData = function(){
            $http.get('api/gpa').success(function(gpas) {
                self.data = gpas;
            });
        };

        self.getData();

        self.addData = function(){
            if((self.nameField.length >= 1) && (self.gradeField.length === 1) && gradeCheck(self.gradeField) && (self.creditField >= 1)) {
                $http.post('/api/gpa', {name: self.nameField, grade: self.gradeField.toUpperCase(), credits: self.creditField}).success(function(){
                    self.getData();
                });
                self.nameField = "";
                self.gradeField = "";
                self.creditField = 0;
            } else {
                alert("Make sure that you put in your information correctly!")
            }
        };

        self.gpaCalc = function(data){
            var gpa = 0;
            var credits = 0;
            if (data.length >= 1) {
                 for (var i = 0; i < data.length; i++) {
                     gpa += (gradeValue(data[i].grade) * data[i].credits);
                     credits += data[i].credits;
                 }
                return (gpa / credits);
            }
        };

        function gradeCheck(grade) {
            if (grade == "A" | grade == "B" | grade == "C" | grade == "D" | grade == "F" ) {
                return true;
            }
            else {
                return false;
            }
        };

        function gradeValue(letter){
            if (letter == "A") {
                return 4;
            }
            else if (letter == "B") {
                return 3;
            }
            else if (letter == "C") {
                return 2;
            }
            else if (letter == "D") {
                return 1;
            }
            else if (letter == "F") {
                return 0;
            }
        };

        self.removeData = function(index){
            $http.delete('/api/gpa/' + self.data[index]._id).success(function(){
                self.getData();
            });
        };
    });