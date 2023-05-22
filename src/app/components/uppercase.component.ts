import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UpperCaseService } from '../uppercase.service';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {

  text=''

  activatedRoute = inject(ActivatedRoute)
  uppercase$!: Observable<string>

  uppercaseSvc = inject(UpperCaseService)

  ngOnInit(): void{
    this.text = this.activatedRoute.snapshot.queryParams['text']
    this.uppercase$ = this.uppercaseSvc.toUpperCase(this.text)
  }

  
}
