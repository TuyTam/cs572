import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myDirective1]'
})
export class CustomDirective {
  @Input('shadow') defaultShadow = '1px 1px 5px grey'

  constructor(private e: ElementRef, private r: Renderer2) {
    // e.nativeElement.style.fontSize = '22px'
    r.setStyle(e.nativeElement, 'font-size', '22px')
  }

  // To Listen to Events that are triggered by client
  @HostListener('mouseenter') foo() { this.e.nativeElement.style.color = 'red'; this.myBG = 'yellow' }
  @HostListener('mouseleave') bar() { this.e.nativeElement.style.color = 'black'; this.myBG = 'white' }

  // Bind a property (style.backgroundColor) on the host element 
  // TO a property in the directive class 
  @HostBinding('style.backgroundColor') myBG;
  // Set a property in the class from outside
  @HostBinding('style.box-shadow') myShadow;

  ngOnInit() { // reached after all bound properties are initilized
    this.myShadow = this.defaultShadow;
  }

}
