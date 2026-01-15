import { Component } from '@angular/core';
import {divTransparentDirective} from 'S:/FAW_prj/FAW/src/app/diretivas/diretiva.formulario';
import {BtnGrupotDirective} from 'S:/FAW_prj/FAW/src/app/diretivas/button.grupo';
import {aboutDirective} from 'S:/FAW_prj/FAW/src/app/diretivas/about';
@Component({
  selector: 'app-home',
  imports: [
    divTransparentDirective,
    BtnGrupotDirective,
    aboutDirective
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
