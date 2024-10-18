import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectregComponent } from './subjectreg.component';

describe('SubjectregComponent', () => {
  let component: SubjectregComponent;
  let fixture: ComponentFixture<SubjectregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
