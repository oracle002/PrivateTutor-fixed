import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorhomeComponent } from './tutorhome.component';

describe('TutorhomeComponent', () => {
  let component: TutorhomeComponent;
  let fixture: ComponentFixture<TutorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
