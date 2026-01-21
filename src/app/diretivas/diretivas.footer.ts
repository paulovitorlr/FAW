import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { elementAt } from "rxjs";       

@Directive({
    selector: '[footerFundo]',
    standalone: true
})

export class footerFundoDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
    this.el.style.backgroundColor = 'rgba(32, 32, 32, 1)';
    this.el.style.height = '71px';
    this.el.style.width = '872px';
    this.el.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    this.el.style.borderRadius = '8px';
    
   


    //estilo da imagem interna
    const img = this.el.querySelector("img") as HTMLImageElement;
    if (img) {
        
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        
    }
}
}