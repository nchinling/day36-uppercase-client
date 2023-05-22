import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router';
import { UppercaseComponent } from './components/uppercase.component'
import { MainComponent } from './components/main.component';
import { UpperCaseService } from './uppercase.service';


const appRoutes:Routes = [
  
  {path: '', component: MainComponent},
  {path: 'uppercase', component: UppercaseComponent},
  {path: '**', redirectTo:'/', pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    UppercaseComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
   ],
  providers: [UpperCaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
