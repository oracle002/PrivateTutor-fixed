import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaterequestreportComponent } from './candidaterequestreport.component';

describe('CandidaterequestreportComponent', () => {
  let component: CandidaterequestreportComponent;
  let fixture: ComponentFixture<CandidaterequestreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidaterequestreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidaterequestreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
