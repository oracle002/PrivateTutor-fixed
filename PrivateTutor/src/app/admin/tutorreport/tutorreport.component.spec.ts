import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorreportComponent } from './tutorreport.component';

describe('TutorreportComponent', () => {
  let component: TutorreportComponent;
  let fixture: ComponentFixture<TutorreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
