import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatereportComponent } from './candidatereport.component';

describe('CandidatereportComponent', () => {
  let component: CandidatereportComponent;
  let fixture: ComponentFixture<CandidatereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
