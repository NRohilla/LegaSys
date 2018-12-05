import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsPersonalDetailsComponent } from './client-details-personal-details.component';

describe('ClientDetailsPersonalDetailsComponent', () => {
  let component: ClientDetailsPersonalDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
