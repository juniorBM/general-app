import { FormGroup } from '@angular/forms';
import { FormErrors } from './utils.model';

export function getFormErrors(formGroup: FormGroup): FormErrors[] {
  let formErrors: FormErrors[] = [];
  Object.keys(formGroup.controls).forEach(controlName => {
    Object.keys(formGroup.controls[controlName].errors ?? '').forEach(error => {
      formErrors[controlName] = [error];
    });
  });
  return formErrors;
}
