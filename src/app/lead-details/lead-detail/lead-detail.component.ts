import { Component, OnInit } from '@angular/core';
import { LeadDetailService } from 'src/app/shared/lead-detail.service';
import { NgForm } from '@angular/forms';
import { createWiresService } from 'selenium-webdriver/firefox';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styles: []
})
export class LeadDetailComponent implements OnInit {

  constructor(private service : LeadDetailService, private toaster : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(from ?: NgForm)
  {
    if(from != null)
      from.resetForm();
    this.service.formData = {
      leadId : 0,
      leadFirstName: '',
      leadLastName:'',
      leadAddress:'',
      leadEmail:''
    }
  }

  onSubmit(from : NgForm)
  {
    this.service.postLeadDetail(from.value).subscribe(
      res => {
        this.resetForm(from);
        this.toaster.success('submited Successfully','User Registerd')
      },
      err => {
        console.log(err);
      }

    )
  }

}
