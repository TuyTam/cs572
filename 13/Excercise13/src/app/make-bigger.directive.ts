import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private e:ElementRef, private r:Renderer2) {
    //r.setStyle(e.nativeElement, 'font-size', '12px')
   }

  @HostListener('dblclick') onDoubleClick(){this.myfontsize = this.myfontsize * 2; console.log('Font size' + this.myfontsize);}

  @HostBinding('style.font-size.px') myfontsize;

  ngOnInit(){
    this.myfontsize = "12";
  }
}
