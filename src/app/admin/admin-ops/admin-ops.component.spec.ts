import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpsComponent } from './admin-ops.component';

describe('AdminOpsComponent', () => {
  let component: AdminOpsComponent;
  let fixture: ComponentFixture<AdminOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
