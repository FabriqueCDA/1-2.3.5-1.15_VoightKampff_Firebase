import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAgentsComponent } from './accueil-agents.component';

describe('AccueilAgentsComponent', () => {
  let component: AccueilAgentsComponent;
  let fixture: ComponentFixture<AccueilAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
