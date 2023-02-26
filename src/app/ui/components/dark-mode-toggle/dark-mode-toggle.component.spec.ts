import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';


describe('DarkModeToggleComponent', () => {
  let component: DarkModeToggleComponent;
  let fixture: ComponentFixture<DarkModeToggleComponent>;
  let documentRef: Document;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DarkModeToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    documentRef = TestBed.inject(DOCUMENT);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change toggle class name', () => {
    expect(documentRef.body.classList.contains('light'));
    component.toggleTheme();
    documentRef.body.classList.toggle('dark');
    expect(documentRef.body.classList.contains('dark'));
  });
});
