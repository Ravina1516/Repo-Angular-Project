import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistnameValidators, noofTracksValidators } from './artistname.validators';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-searchlogin',
  templateUrl: './searchlogin.component.html',
  styleUrls: ['./searchlogin.component.css']
})
export class SearchloginComponent{
  form = new FormGroup({
    artistname:new FormControl('',
    [
      Validators.required,
      ArtistnameValidators.notNameJack
    ]),
    nooftracks:new FormControl('',
    [
      Validators.required,
      noofTracksValidators.notTrack
    ])
  })

  constructor(private router: Router) {}
  invalidSearch:boolean;

  activatedRoute:ActivatedRoute
  onSubmit(form: any): void{
    console.log(form.artistname);
    let artistnameval:string = this.form.get('artistname').value;
    let nooftracksval:number = this.form.get('nooftracks').value;
    this.form.setErrors({
      invalidSearch: true
    });
    if(artistnameval && nooftracksval){
      this.router.navigate(['/',"artistcollection"]);
    }
  }
  get artistname(){
    return this.form.get('artistname');
  }
  get nooftracks(){
    return this.form.get('nooftracks');
  }
}


