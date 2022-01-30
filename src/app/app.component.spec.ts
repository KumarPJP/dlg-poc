import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
//import { AccordionComponent } from './accordion/accordion.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
  it('should create the app Component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should render accordian component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement } = fixture;
    const accordion = debugElement.query(By.css('app-accordion'));
    expect(accordion).toBeTruthy();
  });
});
