import { Component, OnInit } from '@angular/core';
import { _data_about } from 'src/app/interface/interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {

  public dataAbout : _data_about[] = []

  constructor(
    private data : DataService
  ) { 
    this.dataAbout = data.aboutData
  }

  ngOnInit(): void {
  }

}
