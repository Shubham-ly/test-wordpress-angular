import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elem: ElementRef) {}

  @Output('clickOutside') clickOutside = new EventEmitter<any>();

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement: HTMLElement) {
    const clickedInside = this._elem.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }
}
