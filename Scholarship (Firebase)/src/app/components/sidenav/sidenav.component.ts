import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit, OnInit {
  private clickedElement: HTMLElement | null = null;
  userEmail: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserEmail().then(userEmail => {
      this.userEmail = userEmail;
    });
  }

  ngAfterViewInit(): void {
    const btnElList = document.querySelectorAll<HTMLElement>('.dashboard');

    btnElList.forEach((btnEl: HTMLElement) => {
      btnEl.addEventListener('mouseover', () => {
        if (this.clickedElement !== btnEl) {
          this.handleHoverEffect(btnEl);
        }
      });

      btnEl.addEventListener('mouseout', () => {
        if (this.clickedElement !== btnEl) {
          this.removeHoverEffect(btnEl);
        }
      });

      btnEl.addEventListener('click', () => {
        if (this.clickedElement) {
          this.removeHoverEffect(this.clickedElement);
        }

        const specialElement = document.querySelector('.special');
        specialElement?.classList.remove('special');

        btnEl.classList.add('special');
        this.handleHoverEffect(btnEl);

        this.clickedElement = btnEl;
      });
    });
  }

  private handleHoverEffect(btnEl: HTMLElement): void {
    const imgElement = btnEl.querySelector('.img') as HTMLElement;
    if (imgElement) {
      const topImgElement = imgElement.querySelector('.top-img') as HTMLElement;
      if (topImgElement) {
        topImgElement.style.opacity = '1';
      }
    }
  }

  private removeHoverEffect(btnEl: HTMLElement): void {
    const imgElement = btnEl.querySelector('.img') as HTMLElement;
    if (imgElement) {
      const topImgElement = imgElement.querySelector('.top-img') as HTMLElement;
      if (topImgElement) {
        topImgElement.style.opacity = '0';
      }
    }
  }
}
