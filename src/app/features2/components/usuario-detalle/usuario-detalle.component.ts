import { Component, effect, inject, input } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-detalle',
  imports: [CommonModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.scss',
})
export default class UsuarioDetalleComponent {
  id = input<string>();
  usuarioService = inject(UsuarioService);
  usuario: any = null;

  constructor() {
    effect(() => {
      if (this.id()) {
        this.getUsuario(this.id() as string);
      }
    });
  }

  getUsuario(id: string) {
    this.usuarioService.getUsuario(id).then((res: any) => {
      this.usuario = res.data();
    });
  }
}
