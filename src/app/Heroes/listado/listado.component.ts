import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: '/listado.component.html',
  styleUrls: ['/listado.component.css']
})
export class ListadoComponent{

  heroes : string[]=['Daniwoman','Electroiman','Musulman','Guzman'];
  eliminar : string = "";
  clickado : string ="";

  borrarHeroe(){
   if(this.heroes.length == 0){
    this.eliminar= "";
   } else{
    this.eliminar = this.heroes[0];
   }
   this.heroes.splice(0,1);
  }
  clickar(heroeclickado : string){
    this.clickado = heroeclickado
   }
   

}
