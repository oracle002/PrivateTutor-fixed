import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationregComponent } from './qualificationreg.component';

describe('QualificationregComponent', () => {
  let component: QualificationregComponent;
  let fixture: ComponentFixture<QualificationregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
