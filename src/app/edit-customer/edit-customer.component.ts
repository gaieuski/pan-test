import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  @Input() data: any;

  formEditCustomer: FormGroup;
  editCustomer: any;
  disabled: boolean = true;
  cpf: any;
  name: any
  email: any;
  phone: any;

  constructor(
    private ref: DynamicDialogRef,
    private fb: FormBuilder,
    private config: DynamicDialogConfig
  ) {
    this.formEditCustomer = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      cpf: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [Validators.required]),
    })
   }

  ngOnInit(): void {
    if(this.config.data) {
      this.editCustomer = this.config.data.customer;
      this.cpf = this.editCustomer.cpf;
      this.name = this.editCustomer.name;
      this.email = this.editCustomer.email;
      this.phone = this.editCustomer.phone;
    }
  }

  confirm(): void {
    console.log()
    this.formEditCustomer.markAllAsTouched();
    if(this.formEditCustomer.valid) {
      this.formEditCustomer.disable();
      this.ref.close({...this.formEditCustomer.value});
    }
  }

  close() {
    this.ref.close();
  }
}
