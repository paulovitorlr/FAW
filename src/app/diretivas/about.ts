import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { elementAt } from "rxjs";       

@Directive({
    selector: '[about]',
    standalone: true
})

export class aboutDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
    this.el.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    this.el.style.height = '230px';
    this.el.style.width = '355px';
    this.el.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    this.el.style.borderRadius = '8px';
    this.el.style.display = 'flex';
    this.el.style.flexDirection = 'column';
    this.el.style.alignItems = 'flex-start';
    this.el.style.justifyContent = 'center';
    this.el.style.padding = '16px';
    this.el.style.boxSizing = 'border-box';
    this.el.style.gap = '23px';


    //estilo da imagem interna
    const img = this.el.querySelector("img") as HTMLImageElement;
    if (img) {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        
    }
}
}