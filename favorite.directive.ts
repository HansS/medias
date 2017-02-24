import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[favorite]'
})
export class FavoriteDirective {

  constructor() { }

  @HostBinding('class.is-favorite') isFavorite = true;
  
  @Input() set favorite(value) {
    this.isFavorite = value;
  }
  
  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
}
