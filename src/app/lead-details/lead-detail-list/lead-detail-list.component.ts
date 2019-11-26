import { Component, OnInit } from '@angular/core';
import { LeadDetailService } from 'src/app/shared/lead-detail.service';
import { LeadDetail } from 'src/app/shared/lead-detail.model';

@Component({
  selector: 'app-lead-detail-list',
  templateUrl: './lead-detail-list.component.html',
  styles: []
})
export class LeadDetailListComponent implements OnInit {

  constructor(private service : LeadDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }
}
