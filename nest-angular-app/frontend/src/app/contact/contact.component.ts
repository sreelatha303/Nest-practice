import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource:any  = [];
  contact:any = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readContacts().subscribe((result)=>{   
      console.log(result)
     this.dataSource  =  result?.contacts;
    })
  }
  selectContact(contact:any){
    this.contact = contact;
  }

  newContact(){
    this.contact = {};
  }
  createContact(f:any){
    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteContact(id:number){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateContact(f:any){
    f.value.id = this.contact['_id'];
    this.apiService.updateContact(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

}
