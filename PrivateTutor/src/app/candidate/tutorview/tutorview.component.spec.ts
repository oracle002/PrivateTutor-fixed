import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorviewComponent } from './tutorview.component';

describe('TutorviewComponent', () => {
  let component: TutorviewComponent;
  let fixture: ComponentFixture<TutorviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
