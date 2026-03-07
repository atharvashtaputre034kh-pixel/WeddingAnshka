import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOpeningComponent } from './letter-opening.component';

describe('LetterOpeningComponent', () => {
  let component: LetterOpeningComponent;
  let fixture: ComponentFixture<LetterOpeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterOpeningComponent]
    });
    fixture = TestBed.createComponent(LetterOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
