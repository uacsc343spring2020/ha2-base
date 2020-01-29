// YOUR CODE HERE




// This is the makeSignaller function as discussed in class
// Do not change this function
var makeSignaller = function() {
    var _subscribers = []; // Private member

    // Return the object that's created
    return {
	// Register a function with the notification system
	add: function(handlerFunction) { _subscribers.push(handlerFunction); },

	// Loop through all registered function snad call them with passed
	// arguments
	notify: function(args) {
	    for (var i = 0; i < _subscribers.length; i++) {
		_subscribers[i](args);
	    }
	}
    };
}

// makes the model for the todo system
//
var makeModel = function() {
    // YOUR CODE HERE

}


// Make a single category control button. Clicking this button
// should change the category for subsequent todo item additions
//
// btnId - the Id of the element of this button
// category - the category associated with this button
//
var makeCategoryControl = function(btnId, category) {
    // YOUR CODE HERE
    
}


// Make a single clear items button. Clicking this button should 
// delete all items in the todo list.
//
// btnId - the Id of the element of this button
//
var makeClearControl = function(btnId) {
    // YOUR CODE HERE
    
}

// Make a set of controls to add items to the todo list.
//
// model - a reference to the model
// txtId - the Id of the element that takes the todo text
// btnId - the Id of the element that when clicked will add the text
//
var makeAddControls = function(model, txtId, btnId) {
    // YOUR CODE HERE
    
}

// Make a view showing all items in the todo list and handling interactions
// directly with that list
//
// model - a reference to the model
// listId - the Id of the element holding the list, expected to be a div
//
var makeListView = function(model, listId) {
    // YOUR CODE HERE


}

// the controller for the MVC setup
//
// model - a reference to the model
//
var makeController = function(model) {
    // YOUR CODE HERE


}

// Create your MVC system here once the DOM Content is loaded
//
document.addEventListener("DOMContentLoaded", function(event) {
    // YOUR CODE HERE
    
});
