import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInterestFormComponent } from './base-interest-form.component';

describe('BaseInterestFormComponent', () => {
  let component: BaseInterestFormComponent;
  let fixture: ComponentFixture<BaseInterestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BaseInterestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseInterestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
