import { Component, HostBinding, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ROUTE } from '@config';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  @HostBinding('class') class = 'c-shell';

  route = ROUTE;

  isActive = false;
  isOpening = false;
  isClosing = false;
  action: string = '';

  constructor(protected router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (this.isActive) {
        this.startClose();
      }
    });
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  startOpen() {
    this.action = 'open';
    this.isActive = true;
    this.isOpening = true;
  }

  startClose() {
    this.action = 'close';
    this.isActive = true;
    this.isClosing = true;
  }

  endToggling() {
    if (this.action == 'close') {
      this.isActive = false;
    }
    this.isOpening = false;
    this.isClosing = false;
    this.action = '';
  }
}
