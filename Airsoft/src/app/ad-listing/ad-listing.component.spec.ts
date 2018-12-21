import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdListingComponent } from './ad-listing.component';

describe('AdListingComponent', () => {
  let component: AdListingComponent;
  let fixture: ComponentFixture<AdListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
