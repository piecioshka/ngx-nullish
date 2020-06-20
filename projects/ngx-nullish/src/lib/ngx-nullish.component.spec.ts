import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNullishComponent } from './ngx-nullish.component';

describe('NgxNullishComponent', () => {
  let component: NgxNullishComponent;
  let fixture: ComponentFixture<NgxNullishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNullishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNullishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
