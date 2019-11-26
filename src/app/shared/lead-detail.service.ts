import { Injectable } from '@angular/core';
import { LeadDetail } from './lead-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadDetailService 
{
  formData : LeadDetail;
  readonly rootURl = "http://localhost:62157/api";
  list : LeadDetail[];

  constructor(private http:HttpClient) { }

  postLeadDetail(formData : LeadDetail)
  {
    return this.http.post(this.rootURl+'/LeadDetail',formData);
  }


  refreshList()
  {
    this.http.get(this.rootURl+'/LeadDetail')
    .toPromise()
    .then(res => this.list = res as LeadDetail[])
  }
}
