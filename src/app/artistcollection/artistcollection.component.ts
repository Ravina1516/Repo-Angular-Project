import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artistcollection',
  templateUrl: './artistcollection.component.html',
  styleUrls: ['./artistcollection.component.css']
})
export class ArtistcollectionComponent implements OnInit {
  artists:any[];
  artistInfo:any;
  constructor(private http: HttpClient) {
      
  }

  ngOnInit() {
    this.http.get("http://itunes.apple.com/search?term=jack&limit=4")
      .subscribe((response:any) =>{
        this.artists = response.results;
        console.log(this.artists);
      })
  }
  onTabClick(event, artist){
    let artistName = artist.artistName;
    this.http.get("http://itunes.apple.com/search?term="+ artistName +"&limit=1")
      .subscribe((response:any) =>{
        this.artistInfo = response.results;
        console.log(this.artistInfo);
      })
    }
  }

