//packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
//needed templates
import { Tasks } from '../api/tasks.js';
//my template
import './add.html';

Template.add.events({
    'submit .add-task'(event) {
        var target = event.target;
        var text = target.text.value;
        event.preventDefault();
        Meteor.call('tasks.insert', text);
        target.text.value = '';
    }
});
   