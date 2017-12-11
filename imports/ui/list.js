import { Template } from 'meteor/templating';
//database table
import { Tasks } from '../api/tasks.js';

//my template
import './list.html'; 
//other templates i want to use 
import './task.js'; 

Template.list.helpers({
    tasks() {
      //queue
      // return Tasks.find({});
      //stack ...
      return Tasks.find({}, { sort: { createdAt: -1 } });
    } 
  });