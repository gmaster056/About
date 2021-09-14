import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingSkillsComponent } from './coding-skills.component';

describe('CodingSkillsComponent', () => {
  let component: CodingSkillsComponent;
  let fixture: ComponentFixture<CodingSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
