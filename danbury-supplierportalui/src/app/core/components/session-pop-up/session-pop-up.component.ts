import { Component, OnInit, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-session-pop-up',
  templateUrl: './session-pop-up.component.html',
  styleUrls: ['./session-pop-up.component.scss']
})
export class SessionPopUpComponent implements OnInit {
  @Input() countMinutes: number;
  @Input() countSeconds: number;
  @Input() progressCount: number;
  color: any;
  mode: any;


  constructor(public dialogRef: MatDialogRef<SessionPopUpComponent>, ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
