import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundInterestFormComponent } from './compound-interest-form.component';

describe('CompoundInterestFormComponent', () => {
  let component: CompoundInterestFormComponent;
  let fixture: ComponentFixture<CompoundInterestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompoundInterestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundInterestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
