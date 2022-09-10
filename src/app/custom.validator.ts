import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenNames(
  control: AbstractControl
): ValidationErrors | null {
  const forbiddenUserNames = ['Chris', 'Anna'];

  if (forbiddenUserNames.indexOf(control.value) !== -1) {
    return { forbiddenNames: true };
  }
  return null;
}
