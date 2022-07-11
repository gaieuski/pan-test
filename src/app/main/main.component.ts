import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddCustumerComponent } from '../add-custumer/add-custumer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  customers: any;
  selectedCustomer: any;
  displayConfirmDel: boolean = false;

  constructor(
    private service: CustomerServiceService,
    private dialogService: DialogService,
    ) { }

  ngOnInit(): void {
    this.customerList();
  }

  customerList() {
    this.service.getCustumerList()
      .subscribe(response => {
      this.customers = response;
    })
  }

  showAddCustumer(): void {
    const ref = this.dialogService.open(AddCustumerComponent, {
      header: 'Cadastro de Usuário',
      styleClass: 'modal-primary',
      closable: false
    });
    ref.onClose.subscribe((response: any) => {
      if(response){
        this.customers.push(response);
      }
    });
  }

  showModalDel(i: number) {
    this.displayConfirmDel = true;
    this.selectedCustomer = this.customers[i];
  }

  delCustumer(): void {
    let index: number;
    index = this.customers.indexOf(this.selectedCustomer)
    this.customers.splice(index, 1);          
    this.displayConfirmDel = false;
  }

  showEditCustumer(i: number): void {
   const ref = this.dialogService.open(EditCustomerComponent, {
    header: 'Editar usuário',
    styleClass: 'modal-primary',
    data: {
      customer: this.customers[i]
    },
    closable: false
   });
   ref.onClose.subscribe(response => {
    if(response){
      let index = this.customers.indexOf(this.customers[i]);
      this.customers.splice(index, 1);
      this.customers.push(response);
    }
   })
  }

  closeModalDel() {
    this.displayConfirmDel = false;
  }
}
