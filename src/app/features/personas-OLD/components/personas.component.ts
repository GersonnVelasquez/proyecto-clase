import { Component, inject } from '@angular/core';
import { PersonasService } from '../service/personas.service';
import { Persona } from '../models/persona.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas',
  imports: [CommonModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss',
})
export class PersonasComponent {
  personasService = inject(PersonasService);

  personas$ = this.personasService.getUsers();

  crearPersona() {
    const persona: Persona = {
      // uuid: '1234',
      nombre: 'Juan',
      apellido: 'Pérez',
      edad: 30,
      genero: 'Masculino',
      email: 'testing@gmail.com',
      direccion: 'Calle Falsa 123',
      telefono: '123456789',
    };
    this.personasService.createNewPerson(persona).then(() => {
      console.log('Persona creada con éxito');
    });
  }
}
