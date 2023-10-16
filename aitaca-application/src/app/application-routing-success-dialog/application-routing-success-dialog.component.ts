import { MatDialogModule } from '@angular/material/dialog';
import { Component, Input ,EventEmitter,ViewChild, Output} from '@angular/core';

@Component({
  selector: 'app-application-routing-success-dialog',
  templateUrl: './application-routing-success-dialog.component.html',
  styleUrls: ['./application-routing-success-dialog.component.css']
})
export class ApplicationRoutingSuccessDialogComponent{

  @Input() website ?: string;
  @ViewChild('dialog') dialog?: MatDialogModule;
  @Output() onSubmitClicked: EventEmitter<any> = new EventEmitter();  
  dialogOpen = false;

  submitClicked(){
    this.onSubmitClicked.emit(true);
  }
  closeClicked(){
    this.dialogOpen = false;
  }
  route(){
    
  }
}
