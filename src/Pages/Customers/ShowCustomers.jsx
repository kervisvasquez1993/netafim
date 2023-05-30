import React from 'react';
import styles from './style.module.css';

export const ShowCustomers = () => {
  return (
    <div className={`${styles['register-container']} ${styles['container']}`}>
      <div className={styles['register-header']}></div>

      <div className={styles['register-form']}>
        <div className={styles['title']}>
          <div className={styles['arrow']}></div>
          <h2 className={styles['form-title']}>Añadir cliente</h2>
        </div>

        <div className={styles['btn-header']}>
          <a className={styles['añadir-clientes']} href="#">
            Añadir tarjetas de clientes
          </a>
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
              <legend>Empresa</legend>
              <input
                type="text"
                id="Empresa"
                name="Empresa"
                placeholder="Nombre de empresa"
                required
              />
            </fieldset>

            <fieldset className={styles['input']}>
              <legend>Número de teléfono</legend>
              <input
                type="tel"
                id="tlf"
                name="tlf"
                placeholder="+506 8832 8823"
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

            <fieldset className={styles['input']}>
              <legend>Cultivo</legend>

              <select name="cultivo" id="cultivo" required>
                <option selected disabled>Elegir cultivo</option>
                <option>cultivo 1</option>
                <option>cultivo 2</option>
                <option>cultivo 3</option>
                <option>cultivo 4</option>
                <option>cultivo 5</option>
              </select>
            </fieldset>

            <fieldset className={styles['input']}>
              <legend>Ubicación/zona</legend>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                placeholder="Zona del cultivo"
                required
              />
            </fieldset>

            <fieldset className={styles['input']}>
              <legend>País</legend>
              <input
                type="text"
                id="pais"
                name="pais"
                placeholder="País"
                required
              />
            </fieldset>

            <fieldset className={`${styles['input']} ${styles['tamaño-cult']}`}>
              <legend>Tamaño del cultivo</legend>
              <input
                type="text"
                id="tamaño-cultivo"
                name="tamaño-cultivo"
                placeholder="9999"
                required
              />

              <select name="tamaño-cultivo" id="tamaño-cultiv" required>
                <option>Unidad</option>
                <option>cultivo 1</option>
                <option>cultivo 2</option>
                <option>cultivo 3</option>
                <option>cultivo 4</option>
                <option>cultivo 5</option>
              </select>
            </fieldset>

            <label className={styles['extra']}>
              <input type="checkbox" id="extra" name="extra" /> ¿Desea recibir información por correo?
            </label>

            <div className={styles['btn']}>
              <a className={styles['register-link']} href="#">
                Activar cliente
              </a>
            </div>
            <div className={`${styles['btn']} ${styles['btn-dos']}`}>
              <a className={`${styles['register-link']} ${styles['white']}`} href="#">
                Eliminar cliente
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

