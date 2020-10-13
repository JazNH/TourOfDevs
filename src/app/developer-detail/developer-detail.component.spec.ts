import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDetailComponent } from './developer-detail.component';

describe('DeveloperDetailComponent', () => {
  let component: DeveloperDetailComponent;
  let fixture: ComponentFixture<DeveloperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
