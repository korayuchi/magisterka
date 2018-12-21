import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WydarzeniaComponent } from './wydarzenia.component';

describe('WydarzeniaComponent', () => {
  let component: WydarzeniaComponent;
  let fixture: ComponentFixture<WydarzeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WydarzeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WydarzeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
