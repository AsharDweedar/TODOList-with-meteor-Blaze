//meteor
import { Template } from 'meteor/templating'
//database table
import { Tasks } from '../api/tasks.js';
//my template
import './body.html';
//other templates i want to use 
import './list.js';
import './add.js';

Template.body.helpers({
    incompleteCount() {
        return Tasks.find({ checked: { $ne: true } }).count();
    },
    currentUser () {
        return  Meteor.userId() || false;
    }
})
  



