import React from 'react';
import styles from './style.module.css';

export const Register = () => {
  return (
    <div className={styles['register-container']}>
      <div className={styles['register-header']}></div>

      <div className={styles['register-form']}>
        <div className={styles['title']}>
          <div className={styles['arrow']}></div>
          <h2 className={styles['form-title']}>Registro</h2>
        </div>

        <div className={styles['form-container']}>
          <form>
            <fieldset className={styles['input']}>
              <legend>Nombre</legend>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Juan"
                required
              />
            </fieldset>

            <fieldset className={styles['input']}>
              <legend>Apellidos</legend>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Hernández Perez"
                required
              />
            </fieldset>

            <fieldset className={styles['input']}>
              <legend>Correo electrónico</legend>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@netafim.com"
                required
              />
            </fieldset>
            <div className={styles['email-bottom-title']}>
              <p>Solo correos @netafim.com se pueden registrar*</p>
            </div>

            <fieldset className={styles['input']}>
              <legend>Contraseña</legend>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                required
              />
            </fieldset>

            <fieldset className={styles['input']}>
              <legend>Confirmar contraseña</legend>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="*********"
                required
              />
            </fieldset>

            <div className={styles['btn']}>
              <a className={styles['register-link']} href="#">
                Registrar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

