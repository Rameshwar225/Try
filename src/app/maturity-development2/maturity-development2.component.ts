import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-maturity-development2',
  templateUrl: './maturity-development2.component.html',
  styleUrls: ['./maturity-development2.component.css']
})
export class MaturityDevelopment2Component implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const sysCircles = document.querySelectorAll('[data-domain="SYS"] .status-circle') as NodeListOf<HTMLElement>;
    const swCircles = document.querySelectorAll('[data-domain="SW"] .status-circle') as NodeListOf<HTMLElement>;
    const hwCircles = document.querySelectorAll('[data-domain="HW"] .status-circle') as NodeListOf<HTMLElement>;

    this.handleCircleClick(sysCircles);
    this.handleCircleClick(swCircles);
    this.handleCircleClick(hwCircles);
  }

  resetCircles(circles: NodeListOf<HTMLElement>) {
    circles.forEach((circle: HTMLElement) => {
      this.renderer.setStyle(circle, 'backgroundColor', '');
    });
  }

  handleCircleClick(circles: NodeListOf<HTMLElement>) {
    circles.forEach((circle: HTMLElement) => {
      this.renderer.listen(circle, 'click', () => {
        this.resetCircles(circles);

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
