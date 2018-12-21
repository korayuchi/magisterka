import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeqComponent } from './myeq.component';

describe('MyeqComponent', () => {
  let component: MyeqComponent;
  let fixture: ComponentFixture<MyeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyeqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
