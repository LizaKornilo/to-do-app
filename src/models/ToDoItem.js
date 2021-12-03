import { v4 as uuid } from 'uuid';

export default function ToDoItem(isChecked, name, uid) {
  this.uid = uid && uuid();
  this.name = name;
  this.isChecked = isChecked;
  this.timestamp = new Date();
}