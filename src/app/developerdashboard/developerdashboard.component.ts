





// developerdashboard.component.ts

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-developerdashboard',
//   templateUrl: './developerdashboard.component.html',
//   styleUrls: ['./developerdashboard.component.css']
// })
// export class DeveloperdashboardComponent {
//   contentUrl = 'cover-page.component.html'; // Initial page

//   loadContent(page: string): void {
//     this.contentUrl = page;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-developerdashboard',
  templateUrl: './developerdashboard.component.html',
  styleUrls: ['./developerdashboard.component.css']
})
export class DeveloperdashboardComponent {
  menuItems = [
    { label: 'Cover Page', url: 'cover-page.component.html' },
    { label: 'Project Master Data', url: 'projectmaster.html' },
    // Add more menu items for other components
  ];

  contentUrl: string = this.menuItems[0].url; // Initial page

  loadContent(page: string): void {
    this.contentUrl = page;
  }
}
