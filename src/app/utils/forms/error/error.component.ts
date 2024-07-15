import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})

export class ErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() patternErrorMessage: string | null = null;

  isControlInvalid() {
    return this.control?.invalid && (this.control?.dirty || this.control?.touched);
  }

  getErrors() {
    const errors = this.control?.errors;
    if (errors) {
      return Object.keys(errors).map(errorKey => this.getErrorMessage(errorKey, errors[errorKey]));
    } else {
      return [];
    }
  }

  getErrorMessage(errorKey: string, errorValue: any): string {
    const mensajes: any = {
      required: 'El campo es requerido.',
      minlength: `El mínimo de caracteres es ${errorValue.requiredLength}.`,
      email: 'El email no tiene un formato válido.',
      alphanumeric: 'El campo solo permite caracteres alfanuméricos'
    };

    return mensajes[errorKey] || 'Error desconocido';
  }
}
