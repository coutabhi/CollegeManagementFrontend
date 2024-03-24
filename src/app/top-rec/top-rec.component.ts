import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rec',
  templateUrl: './top-rec.component.html',
  styleUrls: ['./top-rec.component.css']
})
export class TopRecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recruiters: any[] = [
    { 
      name: 'Mphasis', 
      logoUrl: '../../assets/mphasis-logo.png', 
      description: 'Mphasis is an IT services company based in India.' 
    },
    { 
      name: 'Google', 
      logoUrl: '../../assets/Google-logo.png', 
      description: 'Google is a multinational technology company known for its search engine and other services.' 
    },
    { 
      name: 'TCS (Tata Consultancy Services)', 
      logoUrl: '../../assets/tcs-logo.png', 
      description: 'TCS is an Indian multinational IT services and consulting company.' 
    },
    { 
      name: 'Amazon', 
      logoUrl: '../../assets/amazon-logo.png', 
      description: 'Amazon is an American multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence.' 
    },
  ]

}
