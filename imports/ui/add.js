import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './add.html';

Template.add.events({
    'submit .add-task'(event) {
        var {target} = event;
        var {text: {value}} = target;
        event.preventDefault();
        Tasks.insert({text : value, createdAt: new Date()});
        target.text.value = '';
    }
});
   