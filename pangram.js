//
// This is only a SKELETON file for the "Pangram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Pangram = function(candidate) {
    var notAlpha = /[^a-z]+/gi,
        ALPHA_LENGTH = 26,
        cleaned,
        unique;
    unique = {};
    cleaned = (candidate.replace(notAlpha, '')).toLowerCase();
    cleaned.split('').forEach(function(el) {
        unique[el] = true;
    });
    return {
        isPangram: function() {
            return Object.keys(unique).length === ALPHA_LENGTH;
        }
    };
};

module.exports = Pangram;
