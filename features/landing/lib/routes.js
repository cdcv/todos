import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/landing', {
    name: 'landing',
    action() {
        BlazeLayout.render('landing');
    },
});
