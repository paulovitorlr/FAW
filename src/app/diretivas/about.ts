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

    const img = this.el.querySelector("img") as HTMLImageElement;
    if (img) {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        
    }
}
}