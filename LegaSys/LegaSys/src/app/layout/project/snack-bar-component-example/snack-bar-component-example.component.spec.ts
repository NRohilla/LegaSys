import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponentExampleComponent } from './snack-bar-component-example.component';

describe('SnackBarComponentExampleComponent', () => {
  let component: SnackBarComponentExampleComponent;
  let fixture: ComponentFixture<SnackBarComponentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarComponentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
