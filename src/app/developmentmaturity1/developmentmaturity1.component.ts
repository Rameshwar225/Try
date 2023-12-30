// developmentmaturity1.component.ts
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-development-maturity',
  templateUrl: './developmentmaturity1.component.html',
  styleUrls: ['./developmentmaturity1.component.css']
})
export class Developmentmaturity1Component implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // Find the circles and add click event listeners
    const sysCircles = document.querySelectorAll('[data-domain="SYS"] .status-circle') as NodeListOf<HTMLElement>;
    const swCircles = document.querySelectorAll('[data-domain="SW"] .status-circle') as NodeListOf<HTMLElement>;
    const hwCircles = document.querySelectorAll('[data-domain="HW"] .status-circle') as NodeListOf<HTMLElement>;

    this.handleCircleClick(sysCircles);
    this.handleCircleClick(swCircles);
    this.handleCircleClick(hwCircles);
  }

  resetCircles(circles: NodeListOf<HTMLElement>) {
    circles.forEach((circle: HTMLElement) => {
      this.renderer.setStyle(circle, 'backgroundColor', ''); // Set background color to empty (default)
    });
  }

  handleCircleClick(circles: NodeListOf<HTMLElement>) {
    circles.forEach((circle: HTMLElement) => {
      this.renderer.listen(circle, 'click', () => {
        this.resetCircles(circles); // Reset all circles within the same domain

        // Set the clicked circle to be filled with color
        switch (circle.getAttribute('data-status')) {
          case 'red':
            this.renderer.setStyle(circle, 'backgroundColor', 'red');
            break;
          case 'green':
            this.renderer.setStyle(circle, 'backgroundColor', 'green');
            break;
          case 'yellow':
            this.renderer.setStyle(circle, 'backgroundColor', 'yellow');
            break;
        }
      });
    });
  }
}
