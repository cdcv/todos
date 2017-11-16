import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/prototype1', {
    name: 'prototype1',
    action() {
        BlazeLayout.render('prototype1');
    },
});
