import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Faq } from '../models/faq'
import { slideInOut } from '../app.animation';
 

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [slideInOut]
})
export class AccordionComponent implements OnInit {
  public faqsList: Faq[] = [];
  public title = "HAVE A QUESTION? WE CAN HELP";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs() {
    this.dataService.getFaqs()
      .subscribe((data:Array<Faq>) => { 
        this.faqsList = data; 
        if(this.faqsList.length){
        this.faqsList[0].showPanel = true;
      }
    });
  }

  togglePanel(selectedFaq: Faq) {
    selectedFaq.showPanel = !selectedFaq.showPanel;
  }
  

}
