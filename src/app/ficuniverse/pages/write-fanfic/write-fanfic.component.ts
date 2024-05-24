import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { FanficsService } from '../../services/fanfics.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-write-fanfic',
  templateUrl: './write-fanfic.component.html',
  styleUrls: ['./write-fanfic.component.scss']
})
export class WriteFanficComponent {
  constructor(
    private router: Router, 
    private storeService: FanficsService) {}

  httpState: string = '';
  isLoading: boolean = false;

  author: FormControl = new FormControl('', Validators.required);
  lenguage: FormControl = new FormControl('', Validators.required);
  summary: FormControl = new FormControl('', Validators.required);
  thumbnail: FormControl = new FormControl('', Validators.required);
  title: FormControl = new FormControl('', Validators.required);

  sendValues() {
    const newDte = new Date();
    const newStore = {
      author: this.author.value,
      language: this.lenguage.value,
      summary: this.summary.value,
      thumbnail: this.thumbnail.value,
      title: this.title.value,
      view: 0,
      favorites: 0,
      publicationDate: newDte.toISOString(),
      status: "open"
    }
    this.createNewStore(newStore);
  }

  createNewStore(newStore: any) {
    this.isLoading = true;
    this.storeService.create(newStore).pipe(
      finalize(() => {
        this.isLoading = false;
        setTimeout(() => {
          this.httpState = '';
        }, 2000);
      })
    ).subscribe((response: any) => {
      if( response?.id ) {
        this.httpState = "success"
      } 
    }, (error) => {
      this.httpState = "fail"
    });
  }
  
  navigateToHome() {
    this.router.navigate(['home']).then((response: any) => {} );
  }

}
