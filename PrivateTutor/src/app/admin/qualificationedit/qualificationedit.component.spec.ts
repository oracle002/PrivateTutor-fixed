import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationeditComponent } from './qualificationedit.component';

describe('QualificationeditComponent', () => {
  let component: QualificationeditComponent;
  let fixture: ComponentFixture<QualificationeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
