import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
id= 0;
usuario = new UsuarioModel(0,"","")
constructor(
private usuarioService: UsuarioService,
private  route: ActivatedRoute,
private router:Router
) {}  

ngOnInit() {
  this.id = this.route.snapshot.params['id']
  if (this.id) {
    console.log("EDITAR");
    this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
      // this.usuario = data[0];
    })

  } else {
    console.log("CREAR");
    this.usuarioService.obtenerUsuario(this.id)
  }

}

onSubmit() {
console.log('onSubmit');
if(this.usuario.id_usuario){
this.usuarioService.actualizarUsuario(this.usuario).subscribe(data => {
alert(data)
this.router.navigate(['/usuarios']);
})
}else{
console.log('crear',this.usuario);
this.usuarioService.agregarUsuario(this.usuario).subscribe(data=> {
alert(data)
this.router.navigate(['/usuarios']);

})
}	
}
}