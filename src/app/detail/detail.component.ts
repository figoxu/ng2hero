import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  hero:Hero

  constructor() { }

  ngOnInit() {
  }

}
