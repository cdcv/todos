var logit = false;
var globalHelpers = {
    /*    currentUser: function() {
     return Meteor.userId();
     },*/
    storyContent: function () {
        return Stories.content.get();
    },
}

// Register all of the global helpers
_.each(globalHelpers, function(value, key){
    Template.registerHelper(key, value);
});
