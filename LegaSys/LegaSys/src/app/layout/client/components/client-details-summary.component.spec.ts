import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsSummaryComponent } from './client-details-summary.component';

describe('ClientDetailsSummaryComponent', () => {
  let component: ClientDetailsSummaryComponent;
  let fixture: ComponentFixture<ClientDetailsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
