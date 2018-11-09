import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsCoClientDetailsComponent } from './client-details-co-client-details.component';

describe('ClientDetailsCoClientDetailsComponent', () => {
  let component: ClientDetailsCoClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsCoClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsCoClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsCoClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
