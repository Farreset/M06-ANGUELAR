import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  personaje :Personaje[] =[per1,per2,per3,per4]

    onSubmit(itemForm: NgForm) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(txtVal));
    }
}
interface Personaje{
  nombre :string;
  poder :number;
}
let per1: Personaje = {
  nombre:"antonio",
  poder :23

}
let per2: Personaje = {
  nombre:"pedro",
  poder :65

}
let per3: Personaje = {
  nombre:"cipriano",
  poder :2

}
let per4: Personaje = {
  nombre:"cristo",
  poder :10000

}
