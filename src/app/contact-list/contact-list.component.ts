import { Component  } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
public contacts:Contact[] = [
  {
    name:'Иван Иванов',
    phone:'123456789'
  },
  {
    name:'Кирил Иванов',
    phone:'9876554321'
  },
  {
    name:'Николай Кирилов',
    phone:'129834765'
  },
  {
    name:'Карл 7',
    phone:'892156734'
  }
];

}
