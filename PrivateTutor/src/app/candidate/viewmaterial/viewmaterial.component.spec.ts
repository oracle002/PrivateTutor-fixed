import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaterialComponent } from './viewmaterial.component';

describe('ViewmaterialComponent', () => {
  let component: ViewmaterialComponent;
  let fixture: ComponentFixture<ViewmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
