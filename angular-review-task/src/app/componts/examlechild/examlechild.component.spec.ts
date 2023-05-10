import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamlechildComponent } from './examlechild.component';

describe('ExamlechildComponent', () => {
  let component: ExamlechildComponent;
  let fixture: ComponentFixture<ExamlechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamlechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamlechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
