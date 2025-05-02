import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss',
})
export default class UsuarioComponent {
  usuarioService = inject(UsuarioService);
  usuarios: any = [];

  constructor() {
    this.usuarioService.getUsuarios().subscribe((usuariosDB:any) => {
      this.usuarios = usuariosDB;
    });
  }

  addUsuario() {
    const usuario: Usuario = {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'emaio@gmail.com',
      edad: 25,
      direccion: 'Calle Falsa 123',
      telefono: '123456789',
    };

    this.usuarioService.addUsuario(usuario);
  }
}
