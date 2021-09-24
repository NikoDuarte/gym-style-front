import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.css']
})
export class BgVideoComponent implements OnInit {

  @Input() public src_video!: string

  constructor() { }

  ngOnInit(): void {
  }

}
