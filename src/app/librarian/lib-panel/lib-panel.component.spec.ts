import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPanelComponent } from './lib-panel.component';

describe('LibPanelComponent', () => {
  let component: LibPanelComponent;
  let fixture: ComponentFixture<LibPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
