import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEntryPage } from "./first-entry.page";

describe('FirstEntryPage', () => {
  let component: FirstEntryPage;
  let fixture: ComponentFixture<FirstEntryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstEntryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
