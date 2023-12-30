import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Project {
  projectName: string;
  projectClassification: string;
  projectType: string;
  projectNumber: string;
  asil: string;
  overallStatus: string;
  hw: string;
  sys: string;
  ee: string;
  sw: string;
  me: string;
}
function getRandomColor(): string {
  const colors = ['red', 'green', 'yellow'];
  return colors[Math.floor(Math.random() * colors.length)];
}
@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent {
  

  getCellStyle(arg0: string): string | string[] | Set<string> | { [klass: string]: any; } | null | undefined {
    throw new Error('Method not implemented.');
  }
  // // central.component.ts
  // ... existing code ...

  // getLabelStyle(labelContent: string): string[] {
  //   // Add your logic to determine the label style based on the labelContent
  //   // For example, let's assume you want to set a class based on the label content
  //   switch (labelContent) {
  //     case 'High':
  //       return ['label-high'];
  //     case 'Medium':
  //       return ['label-medium'];
  //     case 'Low':
  //       return ['label-low'];
  //     default:
  //       return [];
  //   }
  // }
  getBgStyle(value: string): string[] {
    switch (value) {
        case 'red':
            return ['bg-high'];
        case 'yellow':
            return ['bg-medium'];
        case 'green':
            return ['bg-low'];
        default:
            return [];
    }
}
  getRandomColor(): string {
    const colors = ['red', 'green', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  projectForm!: FormGroup;
  projects: Project[] = [];
  projectFormVisible = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectClassification: ['', Validators.required],
      projectType: ['', Validators.required],
      projectNumber: ['', Validators.required],
      asil: ['', Validators.required]
    });
  }

  toggleButton() {
    this.projectFormVisible = !this.projectFormVisible;
  }

  exportToExcel() {
    // Logic for exporting to Excel
    const csvContent = this.projects.map(project =>
      `${project.projectName},${project.projectClassification},${project.projectType},${project.projectNumber},${project.asil},`
      + `${project.overallStatus},${project.hw},${project.sys},${project.ee},${project.sw},${project.me}`
    ).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'project_data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  addProject() {
    // central.component.ts

  if (this.projectForm.valid) {
    const newProject: Project = {
      projectName: this.projectForm.value.projectName,
      projectClassification: this.projectForm.value.projectClassification,
      projectType: this.projectForm.value.projectType,
      projectNumber: this.projectForm.value.projectNumber,
      asil: this.projectForm.value.asil,
      overallStatus: this.getRandomColor(),
      hw: this.getRandomColor(),
      sys: this.getRandomColor(),
      ee: this.getRandomColor(),
      sw: this.getRandomColor(),
      me: this.getRandomColor()
    };

    this.projects.push(newProject);

    // Reset the form
    this.resetForm();
  } else {
    // Handle form validation errors or display a message to the user
  }
}



  resetForm() {
    this.projectForm.reset();
    this.projectFormVisible = false;
  }

  openDeveloperDashboard(project: Project) {
    // Generate a dynamic link for the developer dashboard with project information
    const link = ['/developerdashboard', project.projectName, project.projectNumber];

    // Navigate to the developer dashboard route with the project-specific link
    this.router.navigate(link);
  }
   // Additional method to set random colors for cells 6 to 11
   setRandomColors() {
    const table = document.getElementById('projectTable') as HTMLTableElement | null;
    if (table) {
      const rowIndex = this.projects.length - 1; // Assuming you want to set colors for the latest row
      const cells = table.rows[rowIndex + 1]?.cells;
  
      if (cells) {
        for (let i = 5; i < cells.length; i++) {
          cells[i].style.backgroundColor = this.getRandomColor();
        }
      }
    }
  }
  
}