import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-sidebar',
  templateUrl: './quote-sidebar.component.html',
  styleUrls: ['./quote-sidebar.component.scss']
})
export class QuoteSidebarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
