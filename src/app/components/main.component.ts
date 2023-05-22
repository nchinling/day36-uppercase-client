import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  form!: FormGroup

  fb=inject(FormBuilder)
  router=inject(Router)


  ngOnInit():void {
    this.form = this.fb.group({
      text: this.fb.control<string>('', [Validators.required])
    })
  }

  process(){
    console.info('>>>> text: ', this.form.value)
    const params: Params = {text: this.form.value['text']}
    this.router.navigate(['/uppercase'], {queryParams:params})

  }


}
