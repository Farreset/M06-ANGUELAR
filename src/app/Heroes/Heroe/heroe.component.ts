import { Component } from "@angular/core";

@Component({
    selector: 'heroe-component',
    templateUrl: 'heroe.component.html'
  })
  
export class HeroeComponent{
    title :string = 'HEROE MOMENT';
    nombre :string = 'Carles Puigdeman';
    edad :number = 55;

    cambiarNombre(){
        this.nombre="PepsiMan";
    }
    cambiarEdad(){
        this.edad=	845;
    }
    retornar(){
        this.nombre="Carles Puigdeman";
        this.edad=	55;
    }
    mayuscula(){
        return this.nombre.toUpperCase();
    }
    

}

