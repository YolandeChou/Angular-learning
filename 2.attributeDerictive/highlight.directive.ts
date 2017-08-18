import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  constructor(private el:ElementRef){}
  @Input() defaultColor:string;
  @Input('myHighlight') highlightColor:string;
  @HostListener('mouseenter') OnMouseenter{
  	this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') OnMouseleave{
  	this.highlight(null);
  }
  private highlight(color:string){
  	this.el.nativeElement.style.backgroundColor = color;
  }
}
