import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { elementAt } from "rxjs";       

@Directive({
    selector: '[divTransparent]',
    standalone: true
})

export class divTransparentDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
    this.el.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    this.el.style.height = '758px';
    this.el.style.width = '578px';
    //configuração da div
    this.el.style.display = 'flex';
    this.el.style.justifyContent = 'center';
    this.el.style.flexDirection = 'column';

    // Impedir que a imagem estoure
    const img = this.el.querySelector("img") as HTMLImageElement;
    if (img) {
        img.style.maxWidth = "30%";
        img.style.height = "auto";
        
    }
}
}
