import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, inject} from '@angular/core';

@Directive({
  selector: 'img[appImageFade]',
  standalone: true,
})
export class ImageFadeDirective implements AfterViewInit {
  @HostBinding('class.image-loaded') loaded = false;

  private readonly image = inject(ElementRef<HTMLImageElement>).nativeElement;

  ngAfterViewInit(): void {
    if (this.image.complete) {
      this.loaded = true;
    }
  }

  @HostListener('load')
  @HostListener('error')
  onImageSettled(): void {
    this.loaded = true;
  }
}
