'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.weightField = 0;

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
            });
        };

        self.getPets();

        self.addData = function(){
            if((self.textField.length >= 1) && (self.weightField >= 1)) {
                $http.post('api/pets', {text: self.textField, weight: self.weightField}).success(function(){
                    self.getPets();
                });
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
            });
        };

        self.biggestPet = function(data){
            if (data.length >= 1) {
                var biggestName = "";
                var biggestWeight = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].weight > biggestWeight) {
                        biggestName = data[i].text;
                        biggestWeight = data[i].weight;
                    }
                }
                return "The biggest pet is " + biggestName + " weighing a whole " + biggestWeight + " lbs!";
            }
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };


    });