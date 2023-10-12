import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-display-demo-details',
  templateUrl: './display-demo-details.component.html',
  styleUrls: ['./display-demo-details.component.css']
})
export class DisplayDemoDetailsComponent {
  submittedData: any;

  constructor(public demoService: DemoService) {
    this.submittedData = this.demoService.submittedData;

  }



}
