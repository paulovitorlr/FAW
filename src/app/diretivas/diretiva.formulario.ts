import { Directive, ElementRef, inject, OnInit } from "@angular/core";

@Directive({
    selector: '[divTransparent]',
    standalone: true
})
export class divTransparentDirective implements OnInit {

    el = inject(ElementRef).nativeElement as HTMLElement;

    ngOnInit(): void {

        // Fundo gradiente
        this.el.style.backgroundImage =
            'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(72,71,71,0.1))';

        // Borda gradiente sem a parte inferior
        this.el.style.borderTop = '1.5px solid transparent';
        this.el.style.borderLeft = '1.5px solid transparent';
        this.el.style.borderRight = '1.5px solid transparent';
        this.el.style.borderBottom = '0';
        this.el.style.borderImage =
            'linear-gradient(to bottom, rgba(72,71,71,1), rgba(72,71,71,0.1)) 1';
        this.el.style.borderImageSlice = '1';
        

        // Flex interno
        this.el.style.display = 'flex';
        this.el.style.flexDirection = 'column';
        this.el.style.alignItems = 'center';
    }
}
