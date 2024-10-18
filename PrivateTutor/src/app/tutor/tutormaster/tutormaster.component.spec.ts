import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutormasterComponent } from './tutormaster.component';

describe('TutormasterComponent', () => {
  let component: TutormasterComponent;
  let fixture: ComponentFixture<TutormasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutormasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutormasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
