import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styles: [
  ]
})
export class ForgotPassComponent implements OnInit {

  public bg_video: string = 'https://player.vimeo.com/external/496697369.hd.mp4?s=1bd3dbc32a4a41af2e90bc5cf24e51dcf5314ab8&profile_id=172&oauth2_token_id=57447761'

  constructor() { }

  ngOnInit(): void {
  }

}
