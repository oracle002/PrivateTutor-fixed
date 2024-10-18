import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorrequestviewComponent } from './tutorrequestview.component';

describe('TutorrequestviewComponent', () => {
  let component: TutorrequestviewComponent;
  let fixture: ComponentFixture<TutorrequestviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorrequestviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorrequestviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
