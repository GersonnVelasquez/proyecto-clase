import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, RouterModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss',
})
export default class UsuarioComponent {
  usuarioService = inject(UsuarioService);
  usuarios: any = [];
  prueba = 'Hola mundo desde el componente usuario';

  usuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    edad: null,
    direccion: '',
    telefono: '',
  };

  constructor() {
    this.usuarioService.getUsuarios().subscribe((usuariosDB: any) => {
      this.usuarios = usuariosDB;
      console.log(this.usuarios);
    });
  }

  addUsuario() {
    if (this.usuario.nombre === '') {
      alert('El nombre es obligatorio');
      return;
    }

    this.usuarioService.addUsuario(this.usuario);
    this.reset();
  }

  reset() {
    this.usuario = {
      nombre: '',
      apellido: '',
      email: '',
      edad: null,
      direccion: '',
      telefono: '',
    };
  }

  editUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  guardarUsuario() {
    this.usuarioService.editUsuario(this.usuario);
    this.reset();
  }

  deleteUsuario(usuario: Usuario) {
    this.usuarioService.deleteUsuario(usuario);
  }
}
