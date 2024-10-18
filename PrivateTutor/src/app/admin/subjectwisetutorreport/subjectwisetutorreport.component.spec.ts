import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectwisetutorreportComponent } from './subjectwisetutorreport.component';

describe('SubjectwisetutorreportComponent', () => {
  let component: SubjectwisetutorreportComponent;
  let fixture: ComponentFixture<SubjectwisetutorreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectwisetutorreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectwisetutorreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
