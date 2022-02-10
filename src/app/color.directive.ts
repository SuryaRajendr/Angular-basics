import { asNativeElements, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() color: string ="";
  constructor(private elementRef:ElementRef,private renderer: Renderer2) { 
    //this.elementRef.nativeElement.style.backgroundColor = "red";
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.changeColor(this.color)
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.changeColor('white')
  }
  changeColor(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',color);
  }
}
