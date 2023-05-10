import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamleParentComponent } from './examle-parent.component';

describe('ExamleParentComponent', () => {
  let component: ExamleParentComponent;
  let fixture: ComponentFixture<ExamleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamleParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
