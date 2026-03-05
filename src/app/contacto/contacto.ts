import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface ContactoFormData {
  nombre: string;
  correo_electronico: string;
  telefono: string;
  asunto: string;
  mensaje: string
}

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {

  private readonly formBuilder = inject(FormBuilder);

  contactoForm: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zñA-ZÑ0-9 ]+')]],
    correo_electronico: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
    telefono: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}')]],
    asunto: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9 ]+')]],
    mensaje: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z0-9  ñÑ,.ÚúéÉíÍóÓáÁ]+')]],
  });

  onSubmit() {
    if (this.contactoForm.valid) {
      const formData: ContactoFormData = this.contactoForm.value;

      this.contactoForm.reset();
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactoForm.get(fieldName);

    if (!field || !field.touched) return '';

    if (field.hasError('required')) {
      return 'Este campo es requerido';
    }

    if (field.hasError('minlength')) {
      switch (fieldName) {
        case 'nombre':
          return 'Su nombre debe tener al menos 3 letras';
        case 'asunto':
          return 'El asunto debe tener mínimo 2 caracteres';
        case 'mensaje':
          return 'El mensaje debe tener al menos 10 caracteres';
      }
    }

    if (field.hasError('maxlength')) {
      if (fieldName === 'telefono') {
        return 'El teléfono no puede superar 10 dígitos';
      }
    }

    if (field.hasError('pattern')) {
      switch (fieldName) {
        case 'nombre':
          return 'El nombre no debe contener caracteres especiales';
        case 'correo_electronico':
          return 'Debe ingresar un correo válido. Verifique si falta @ o dominio';
        case 'telefono':
          return 'Debe ingresar un número de celular válido (10 dígitos)';
        case 'asunto':
          return 'El asunto no debe contener caracteres especiales';
        case 'mensaje':
          return 'El mensaje no debe contener caracteres inválidos como < > ! ? " ';
      }
    }

    if (field.hasError('email')) {
      return 'Debe ingresar un correo válido';
    }

    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactoForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
}