import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvents]'
})
export class EventsDirective {

  currentIndex: number;
  constructor(public renderer: Renderer, public elementRef: ElementRef) { }

  @HostListener('mouseenter')
  mouseenter(){
    this.currentIndex=parseInt(this.elementRef.nativeElement.cells[0].innerHTML);
    if(this.currentIndex%2===0){
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }
    else{
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
    }

  }

  @HostListener('mouseleave')
  mouseleave(){
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'black')
  }

}
