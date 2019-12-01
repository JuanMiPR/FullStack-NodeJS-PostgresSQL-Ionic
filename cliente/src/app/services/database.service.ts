import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: number;
  nombre: string;
}

const key = 'secret-key';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private storage: Storage
  ) { }


  addItem(item: Item): Promise<any> {

    return this.storage.get(key).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(key, items);
      } else {
        return this.storage.set(key, [item]);
      }
    });
  }
  getItem(): Promise<Item[]> {
    return this.storage.get(key);

  }
  updateItem(item: Item): Promise<any> {
    return this.storage.get(key).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }
      console.log(item.id);
      const newItem: Item[] = [];
      for (const i of items) {
        if (i.id === item.id) {
          newItem.push(item);
          
        } else {
          newItem.push(i);
        }
      }
      return this.storage.set(key, newItem);
    });

  }

  deleteItem(id: number): Promise<Item> {
    return this.storage.get(key).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      const toKeep: Item[] = [];

      for (const i of items) {
        if (i.id !== id) {
          toKeep.push(i);

        }
      }
      return this.storage.set(key, toKeep);

    });
  }

}
