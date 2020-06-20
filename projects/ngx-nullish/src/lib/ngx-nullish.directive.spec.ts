import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { NgxNullishDirective } from './ngx-nullish.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-test',
  template: `
    <h1>Test Component</h1>
    <p *ngxNullish="numbers$ | async as num">
      {{ num }}
    </p>
  `,
})
class TestComponent {
  public numbers$ = new Subject();
}

describe('NullishDirective', () => {
  let fixture: ComponentFixture<TestComponent> = null;
  let component: TestComponent = null;
  let nativeElement: HTMLElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxNullishDirective, TestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  describe('should not display', () => {
    it('null', () => {
      component.numbers$.next(null);
      fixture.detectChanges();
      expect(nativeElement.querySelector('p')).toEqual(null);
    });

    it('undefined', () => {
      component.numbers$.next(null);
      fixture.detectChanges();
      expect(nativeElement.querySelector('p')).toEqual(null);
    });
  });

  describe('should display', () => {
    it('0', () => {
      component.numbers$.next(0);
      fixture.detectChanges();
      expect(nativeElement.querySelector('p').textContent.trim()).toEqual('0');
    });

    it('1', () => {
      component.numbers$.next(1);
      fixture.detectChanges();
      expect(nativeElement.querySelector('p').textContent.trim()).toEqual('1');
    });
  });
});
