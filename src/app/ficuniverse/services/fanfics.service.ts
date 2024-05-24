import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Fanfic } from '../model/fanfic.entity';
import { HttpClient } from '@angular/common/http';
import {Observable, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FanficsService extends BaseService<Fanfic>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/stores'
   }

}

