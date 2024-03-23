import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afaculties',
  templateUrl: './afaculties.component.html',
  styleUrls: ['./afaculties.component.css']
})
export class AfacultiesComponent {
  
  selectedBranch: string | null = null;
  constructor(private router: Router) {
    
   }

  selectBranch() {
    switch (this.selectedBranch) {
      case 'me':
        this.router.navigateByUrl("/mefaculties");
        break;
      case 'ee':
        this.router.navigateByUrl("/eefaculties");
        break;
      case 'ce':
        this.router.navigateByUrl("/cefaculties");
        break;
      default:
        break;
    }
  }
}
