import { AbstractControl, ValidationErrors } from '@angular/forms';

// Confere o formato e os dois dígitos verificadores, sem consultar serviços externos.
export function validarCpf(control: AbstractControl): ValidationErrors | null {
  const cpf = String(control.value || '').replace(/\D/g, '');
  if (!cpf) return null; // Validators.required trata o campo vazio.
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return { cpfInvalido: true };

  for (let tamanho = 9; tamanho <= 10; tamanho++) {
    let soma = 0;
    for (let i = 0; i < tamanho; i++) {
      soma += Number(cpf[i]) * (tamanho + 1 - i);
    }
    const resto = soma % 11;
    const digito = resto < 2 ? 0 : 11 - resto;
    if (digito !== Number(cpf[tamanho])) return { cpfInvalido: true };
  }
  return null;
}
