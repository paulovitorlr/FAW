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

    this.el.style.width = '100%';
    this.el.style.maxWidth = '872px';
    this.el.style.minHeight = '71px';

    this.el.style.boxSizing = 'border-box';

    this.el.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    this.el.style.borderRadius = '8px';

    // layout interno
    this.el.style.display = 'flex';
    this.el.style.alignItems = 'center';
    this.el.style.gap = '16px';
    this.el.style.padding = '16px 20px';
    
   


    //estilo da imagem interna
    const img = this.el.querySelector("img") as HTMLImageElement;
    if (img) {
        
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        
    }
}
}