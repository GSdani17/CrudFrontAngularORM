import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = []; // Variable para almacenar los datos
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => {
        console.log('Usuarios obtenidos:', data);
        this.usuarios = data; // Guardamos los datos obtenidos en la variable
      },
      error: (err) => console.error('Error al obtener usuarios:', err)
    });
  }
  borrarUsuario(id: number) {
    this.usuarioService.borrarUsuario(id).subscribe(data => {

    })
    this.usuarioService.obtenerUsuarios();
    window.location.reload()
  }
}
