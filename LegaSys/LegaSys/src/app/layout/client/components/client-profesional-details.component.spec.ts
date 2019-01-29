import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfesionalDetailsComponent } from './client-profesional-details.component';

describe('ClientProfesionalDetailsComponent', () => {
  let component: ClientProfesionalDetailsComponent;
  let fixture: ComponentFixture<ClientProfesionalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfesionalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfesionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
