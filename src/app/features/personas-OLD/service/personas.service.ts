import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  getUsers() {
    const personaCollection = collection(this.firestore, 'personas');
    return collectionData(personaCollection, { idField: 'uuid' }) as Observable<
      Persona[]
    >;
  }

  createNewPerson(persona: Persona) {
    const personaCollection = collection(this.firestore, 'personas');
    return addDoc(personaCollection, persona);
  }
}
