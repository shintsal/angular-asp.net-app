import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
    // function below executes immediately
    // this.addPropertyForm.controls['Name'].setValue('Default Value')

    // function below executes in a millseconds
    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    }, 1000)
  }


  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit() {
    console.log('Congrats, form submitted');
    console.log(this.addPropertyForm);
  }

}
