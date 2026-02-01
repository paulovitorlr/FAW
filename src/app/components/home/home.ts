import { Component } from '@angular/core';
import {divTransparentDirective} from '../../diretivas/diretiva.formulario';
import {BtnGrupotDirective} from '../../diretivas/button.grupo';
import {aboutDirective} from '../../diretivas/about';
import {footerFundoDirective} from '../../diretivas/diretivas.footer';

@Component({
  selector: 'app-home',
  imports: [
    divTransparentDirective,
    BtnGrupotDirective,
    aboutDirective,
    footerFundoDirective,
    
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
}
