import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private formBuilderConstructor: FormBuilder=inject(FormBuilder);

  form: FormGroup;

  constructor() {
    this.form=this.buildFormConstructor
  }

  get buildFormConstructor():FormGroup{
    return this.form = this.formBuilderConstructor.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  validarFormulario(): void {
    if (this.form.valid) {
      alert("Formulario válido");
    } else {
      alert("Formulario inválido");
    }
  }

}
