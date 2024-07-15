import { AbstractControl, ValidatorFn } from '@angular/forms';

export function alphanumericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (control.value && !alphanumericRegex.test(control.value)) {
      return { 'alphanumeric': true };
    }

    return null;
  };
}
