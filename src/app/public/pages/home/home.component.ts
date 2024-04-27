import {Component, OnInit} from '@angular/core';
import {FanficsService} from "../../../ficuniverse/services/fanfics.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  fanfics: Array<any> = []
  constructor(private fanficService: FanficsService) {
  }

  images = [{
    imageSrc: 'https://ma.wattpad.com/the_hookup_pact_hfc_desktop_final.jpg',
    imageAlt: 'promo1'
  },
    {
      imageSrc: 'https://ma.wattpad.com/threadofashandfire_hfc_desktop_final.jpg',
      imageAlt: 'promo2'
    },
    {
      imageSrc: 'https://ma.wattpad.com/picky_eater__hfc_desktop_final.png',
      imageAlt: 'promo3'
    },]
  ngOnInit(): void {
    this.fanficService.getAll().subscribe((response: any) =>{
      this.fanfics = response
    } )
  }
}
