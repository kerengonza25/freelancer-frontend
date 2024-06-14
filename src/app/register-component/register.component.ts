import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerType: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let registerType2 = this.route.snapshot.paramMap.get('type');
    console.log(registerType2);
    if (registerType2) {
      this.registerType = registerType2;
    }
  }

}
