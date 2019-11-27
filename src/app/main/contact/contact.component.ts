import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserStore } from 'src/app/core/user.store';

@Component({
  selector: 'ce-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  templateEmail = '';
  reactiveForm = this.fb.group({
    niewiem: this.fb.control(''),
    name: this.fb.control(''),
    email: this.fb.control('', [this.dupaValidator, Validators.email]),
    message: this.fb.control('', Validators.maxLength(100))
  });
  constructor(private fb: FormBuilder, private userStore: UserStore) { }

  ngOnInit() {
    this.reactiveForm.get('email').statusChanges.subscribe(console.log);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onReactiveSubmit() {
    if (this.reactiveForm.get('name')) {
      this.userStore.setNewName(this.reactiveForm.get('name').value);
    }
  }

  dupaValidator(control: AbstractControl) {

    return control.value.includes('dupa') ? { dupaWMailu: true } : null;
  }
}
