import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  messages;

  constructor(private _msgService: MessageService){}

  ngOnInit() {
    this._msgService.getMessage().subscribe(res => {
      console.log(res);
      this.messages = res;
    });
  }
}
