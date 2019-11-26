import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ce-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  templateEmail = '';
  reactiveForm = this.fb.group({
    email: this.fb.control('', [this.dupaValidator, Validators.email]),
    message: this.fb.control('', Validators.maxLength(100))
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm.get('email').statusChanges.subscribe(console.log)
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

  onReactiveSubmit() {
    console.log(this.reactiveForm)
  }

  dupaValidator(control: AbstractControl) {
    return control.value.includes('dupa') ? { dupaWMailu: true } : null;
  }
}
