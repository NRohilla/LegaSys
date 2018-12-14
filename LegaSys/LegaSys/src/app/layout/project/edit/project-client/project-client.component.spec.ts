import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectClientComponent } from './project-client.component';

describe('ProjectClientComponent', () => {
  let component: ProjectClientComponent;
  let fixture: ComponentFixture<ProjectClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
