import { v4 as uuid } from "uuid";

export default function ListItem(name, uid) {
  this.uid = uid || uuid();
  this.name = name;
}
