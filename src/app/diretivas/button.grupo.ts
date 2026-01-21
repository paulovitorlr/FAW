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
    this.el.style.background =
      'linear-gradient(135deg, #7BF17D 0%, #279D1C 100%)';

    this.el.style.width = '100%';
    this.el.style.maxWidth = '520px';
    this.el.style.boxSizing = 'border-box';

    this.el.style.padding = '18px 24px';

    this.el.style.border = '1px solid #7BF17D';
    this.el.style.borderRadius = '5px';
    this.el.style.cursor = 'pointer';

    this.el.style.fontWeight = '700';
    this.el.style.textAlign = 'center';
}
}