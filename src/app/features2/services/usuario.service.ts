import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  firestore = inject(Firestore);

  getUsuarios() {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    return collectionData(usuarioCollection, { idField: 'uuid' });
  }

  getUsuario(id: string) {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    const usuarioDoc = doc(usuarioCollection, id);
    return getDoc(usuarioDoc)
  }

  addUsuario(usuario: Usuario) {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    return addDoc(usuarioCollection, usuario);
  }

  editUsuario(usuario: Usuario) {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    const usuarioDoc = doc(usuarioCollection, usuario.uuid);
    return updateDoc(usuarioDoc, {
      ...usuario,
    });
  }

  deleteUsuario(usuario: Usuario) {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    const usuarioDoc = doc(usuarioCollection, usuario.uuid);
    console.log('hola mundo');
    return deleteDoc(usuarioDoc);
  }
}
