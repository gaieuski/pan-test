import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-custumer',
  templateUrl: './add-custumer.component.html',
  styleUrls: ['./add-custumer.component.scss'],
})
export class AddCustumerComponent implements OnInit {

  formCustomer: FormGroup

  constructor(
    private ref: DynamicDialogRef,
    private fb: FormBuilder
    ) { 
      this.formCustomer = this.fb.group({
        name: this.fb.control(null, [Validators.required]),
        cpf: this.fb.control(null, [Validators.required]),
        email: this.fb.control(null, [Validators.required]),
        phone: this.fb.control(null, [Validators.required]),
      });
    }

  ngOnInit(): void {
  }

  confirm(): void {
    this.formCustomer.markAllAsTouched();
    if(this.formCustomer.valid) {
      this.formCustomer.disable();
      this.ref.close({...this.formCustomer.value});
    }
  }

  close() {
    this.ref.close();
  }
}
