import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-selector',
  templateUrl: './register-selector.component.html',
  styleUrls: ['./register-selector.component.css']
})
export class RegisterSelectorComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  select(type: string) {
    this.route.navigate(['/register/' + type]);
  }

}
