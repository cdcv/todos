Stories = {
    initialized: false,
    elementNum:0,
    content: new ReactiveVar(''),
    // load all sounds
    init: function() {
    },
    getStory: function(elementNum,story1) {

        /*
         <div class="appMessage appMessage to">
         This is a reply!<br>
         </div>
         */
        var result = '';
        var divElement = '';
        var locationClass = '';
        for (var i = 0; i < elementNum; i++) {
            var obj = story1[i];
            if (obj.Location === 'L') locationClass = 'from';
            if (obj.Location === 'R') locationClass = 'to';
            divElement = '<div class="appMessage ' + locationClass + '">' + obj.Content + '</div>';
            result = result + divElement + '\n';
            //console.log(divElement);
            //console.log(locationClass, obj.Name, obj.Content);
        }
        return result;
    },
    readStory: function() {
        Stories.elementNum++;
        var storyContent = Stories.getStory(Stories.elementNum,story1);
        Stories.content.set(storyContent);
    }
};
