import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  per1: Personaje = {
    nombre:"antonio",
    poder :23
  
  }
   per2: Personaje = {
    nombre:"pedro",
    poder :65
  
  }
   per3: Personaje = {
    nombre:"cipriano",
    poder :2
  
  }
  per4: Personaje = {
    nombre:"cristo",
    poder :10000
  
  }
  personaje :Personaje[] =[this.per1,this.per2,this.per3,this.per4]


    onSubmit(itemForm: NgForm) {
      let crearper: Personaje = {
        nombre: itemForm.value.nombre,
        poder : itemForm.value.poder
      
      }
       this.personaje.push(crearper);
     }

   
    
}

interface Personaje{
  nombre :string;
  poder :number;
}
