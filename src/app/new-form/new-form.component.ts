import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      address: ['', Validators.required],
      comment: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }

}
