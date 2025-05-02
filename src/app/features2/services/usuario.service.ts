import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  firestore = inject(Firestore);

  getUsuarios() {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    return collectionData(usuarioCollection);
  }

  addUsuario(usuario: Usuario) {
    const usuarioCollection = collection(this.firestore, 'usuariooos');
    return addDoc(usuarioCollection, usuario);
  }
}
