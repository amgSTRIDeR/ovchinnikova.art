import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ImageFadeDirective} from './image-fade.directive';

@Component({
  imports: [ImageFadeDirective],
  template: '<img appImageFade src="/pending-image.webp" alt="Artwork">',
})
class ImageFadeHost {}

describe('ImageFadeDirective', () => {
  let fixture: ComponentFixture<ImageFadeHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageFadeHost],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageFadeHost);
    fixture.detectChanges();
  });

  it('reveals the image after it finishes loading', () => {
    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    expect(image.classList).not.toContain('image-loaded');

    image.dispatchEvent(new Event('load'));
    fixture.detectChanges();

    expect(image.classList).toContain('image-loaded');
  });

  it('reveals the image element when loading fails', () => {
    const image = fixture.nativeElement.querySelector('img') as HTMLImageElement;

    image.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    expect(image.classList).toContain('image-loaded');
  });
});
