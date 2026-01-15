import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { elementAt } from "rxjs";       

@Directive({
    selector: '[BtnGrupo]',
    standalone: true
})

export class BtnGrupotDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
    this.el.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
   
}
}