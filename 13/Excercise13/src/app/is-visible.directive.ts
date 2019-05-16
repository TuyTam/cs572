import { Directive, Input, ElementRef, Renderer2, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input('status') defaultStatus = "visible";
  
  constructor(private e: ElementRef, private r: Renderer2) {
    r.setStyle(e.nativeElement, 'visibility', 'visible')
   }
  
   @HostListener('click') onShowHideClick(){this.myStatus = 'hidden'; console.log("Clicked....");}

   @HostBinding('style.visibility') myStatus;

   ngOnInit(){
     this.myStatus = this.defaultStatus;
   }
}
