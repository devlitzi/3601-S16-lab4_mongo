'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================
var schema = new mongoose.Schema({name: "string", grade: "string", credits: "number"}, {versionKey: false});
var GPA = mongoose.model('GPA', schema);

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    GPA.find(function (err, gpas) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(gpas); // return results
        }
    });
};

exports.create = function(req, res) {
    GPA.create(req.body, function (err, gpa) {
        if (err) {
            res.send(err);
        } else {
            GPA.find(function (err, gpas) {
                if (err) {
                    res.send(err);
                }

                res.json(gpas);
            });
        }
    });
};

exports.destroy = function(req, res) {
    GPA.findById(req.params._id, function(err, gpa){
        if(err) { res.send(err); return "error: " + err; }
        if(!gpa) { return res.sendStatus(404); }

        gpa.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};