import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPatternComponent } from './string-pattern.component';

describe('StringPatternComponent', () => {
  let component: StringPatternComponent;
  let fixture: ComponentFixture<StringPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
