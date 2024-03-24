import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDashComponent } from './lib-dash.component';

describe('LibDashComponent', () => {
  let component: LibDashComponent;
  let fixture: ComponentFixture<LibDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
