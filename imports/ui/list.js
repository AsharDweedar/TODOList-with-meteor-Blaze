import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
//database table
import { Tasks } from '../api/tasks.js';

//my template
import './list.html'; 
//other templates i want to use 
import './task.js'; 


Template.list.onCreated(function listOnCreated() {
  this.state = new ReactiveDict();
  this.autorun(() => {
    this.subscribe('tasks');
  });
  // Meteor.subscribe('tasks');
});

Template.list.helpers({
  tasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the tasks
    //queue ...
    // return Tasks.find({});
    //stack ...
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});


Template.list.events({
  'change .hide-completed input'(event, instance){
    instance.state.set('hideCompleted', event.target.checked);
  },
});