import { Component } from '@angular/core';
import {MODEL} from './model';
import {TODOITEAM} from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  model = MODEL;

  model1 = {    user: 'Adam',    items: [{ action: 'Buy Flowers', done: false },

      { action: 'Get Shoes', done: false },    { action: 'Collect Tickets', done: true },
      { action: 'Call Joe', done: false }] };


  getName() {
    return  this.model[0].user;
  }

  getItem(m: TODOITEAM) {
    return m.items.filter(item => !item.done);
  }

  addItem(m: TODOITEAM, value: string) {
    if (value.trim()) {
      m.items.push({todo: value, done: false});
    }
  }
}
