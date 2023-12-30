// // projectmaster.component.ts

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projectmaster',
//   templateUrl: './projectmaster.component.html',
//   styleUrls: ['./projectmaster.component.css']
// })
// export class ProjectmasterComponent {
//   imagePreview: string | ArrayBuffer | null = 'placeholder.jpg';

//   previewImage(event: any): void {
//     const preview = document.getElementById('image-preview') as HTMLImageElement;
//     const file = event.target.files?.[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imagePreview = reader.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }
// }


// projectmaster.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-projectmaster',
  templateUrl: './projectmaster.component.html',
  styleUrls: ['./projectmaster.component.css']
})
export class ProjectmasterComponent {
  imagePreview: string | ArrayBuffer | null = 'placeholder.jpg';

  previewImage(event: any): void {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
