//packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
//needed templates
import { Tasks } from '../api/tasks.js';
//my template
import './add.html';

Template.add.events({
    'submit .add-task'(event) {
        var {target} = event;
        var {text: {value}} = target;
        event.preventDefault();
        Tasks.insert({text : value, createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username,
    });
        target.text.value = '';
    }
});
   