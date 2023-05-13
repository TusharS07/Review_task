import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDirectiveInElementComponent } from './use-directive-in-element.component';

describe('UseDirectiveInElementComponent', () => {
  let component: UseDirectiveInElementComponent;
  let fixture: ComponentFixture<UseDirectiveInElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseDirectiveInElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseDirectiveInElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
