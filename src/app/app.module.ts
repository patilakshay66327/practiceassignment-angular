import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { LeadDetailComponent } from './lead-details/lead-detail/lead-detail.component';
import { LeadDetailListComponent } from './lead-details/lead-detail-list/lead-detail-list.component';
import { LeadDetailService } from './shared/lead-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    LeadDetailsComponent,
    LeadDetailComponent,
    LeadDetailListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [LeadDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
