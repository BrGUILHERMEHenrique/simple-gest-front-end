import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  @Input() title: String;
  constructor(_title: String) {
    this.title = _title
   }

  ngOnInit(): void {
  }

}
