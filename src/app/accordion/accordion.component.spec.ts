import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from '../services/data.service';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ AccordionComponent ],
      providers : [
        DataService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Title', () => {
    expect(component).toBeTruthy();
    component.title = "HAVE A QUESTION? WE CAN HELP";
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("HAVE A QUESTION? WE CAN HELP");
  });

  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(AccordionComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(DataService);
    let spy_getPosts = spyOn(service,"getFaqs").and.callFake(() => {
      return [];
    });
    component.loadFaqs();
    tick(100);
    expect(component.faqsList).toEqual([]);
  })) 


});
