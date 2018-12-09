import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  mundial: AngularFireList<any>;
  //selectedProduct: ClasificacionComponent = new ClasificacionComponent();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.mundial = this.firebase.list('/mundial');
  }

  
}
