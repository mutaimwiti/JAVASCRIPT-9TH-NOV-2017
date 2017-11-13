/*
STRICT MODE
This forces the script to prevent errors like trying to access undefined variables
*/
"use strict";
/*
PROTOTYPE
Team is a prototype made using an object constructor function
 */
function Team(name) {
    this.name = name;

    /*
    By default league will be ""
     */
    this.league = "";

    /*
    CLOSURE
    editName is a closure. It can access the name property of the prototype which cannot be accessed
    from outside the Team prototype
     */
    this.editName = function(newName) {
        name = newName;
    };

    /*
    ENCAPSULATION
    The variable name is encapsulated,
    the function getName() providing a better way to access the value
     */
    this.getName = function () {
        return name;
    };
}

/*
INHERITANCE
Team is inherited and the function setLeague() is added to form a new object
 */
Team.prototype = {
    setLeague: function (league) {
        this.league = league;
        /*
        We return 'this' to enable chaining of this method with constructor
         */
        return this;
    },

    getLeague: function () {
        return this.league;
    }
};