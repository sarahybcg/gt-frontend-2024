 
# AMERICAN CARIBBEAN TRAVEL

Guía de instalación, ejecución y configuración de la aplicación.

---

## Índice

1. [Setup](#-setup) 
2. [Ejecutar el servidor](#️-ejecutar-el-servidor)
3. [Producción](#producción) 
4. [Vista previa de producción](#-vista-previa-de-producción)
5. [Estructura del proyecto](#-estructura-del-proyecto)
6. [Tecnologías utilizadas](#️-tecnologías-utilizadas)
7. [Contribuciones](#-contribuciones)

---

## Setup

### Instalación de dependencias

Ubícate en la carpeta raíz del proyecto y utiliza tu gestor de paquetes preferido para instalar las dependencias requeridas:

- **Con NPM**:
  ```bash
  npm install
  ```

- **Con PNPM**:
  ```bash
  pnpm install
  ```

- **Con Yarn**:
  ```bash
  yarn install
  ```

- **Con Bun**:
  ```bash
  bun install
  ```

---

## Ejecutar el servidor

Para iniciar el servidor en modo desarrollo, accede a la aplicación en `http://localhost:3000`. Usa el comando correspondiente a tu gestor de paquetes:

- **Con NPM**:
  ```bash
  npm run dev
  ```

- **Con PNPM**:
  ```bash
  pnpm dev
  ```

- **Con Yarn**:
  ```bash
  yarn dev
  ```

- **Con Bun**:
  ```bash
  bun run dev
  ```

---

## Producción

### No utilizar en desarrollo

Estos comandos se utilizan para construir la aplicación para un entorno de producción:

- **Con NPM**:
  ```bash
  npm run build
  ```

- **Con PNPM**:
  ```bash
  pnpm build
  ```

- **Con Yarn**:
  ```bash
  yarn build
  ```

- **Con Bun**:
  ```bash
  bun run build
  ```

---

## Vista previa de producción

Para realizar una vista previa de la aplicación en su entorno de producción localmente, ejecuta uno de estos comandos:

- **Con NPM**:
  ```bash
  npm run preview
  ```

- **Con PNPM**:
  ```bash
  pnpm preview
  ```

- **Con Yarn**:
  ```bash
  yarn preview
  ```

- **Con Bun**:
  ```bash
  bun run preview
  ```

---

## Estructura del proyecto

A continuación se muestra una descripción de las carpetas principales del proyecto:

```plaintext
  .gt-frontend-2024
├── .nuxt                # Archivos generados por Nuxt.js
├── components           # Componentes reutilizables de Vue
├── composables          # Funciones y composables reutilizables
├── layouts              # Diseños globales para las páginas
├── middleware           # Middleware para las rutas
├── pages                # Páginas principales del proyecto
├── public               # Archivos públicos (imágenes, fuentes, etc.)
├── server               # Archivos relacionados con el backend
├── stores               # Gestión del estado de la aplicación (Pinia)
├── .gitignore           # Configuración de Git para ignorar archivos
├── app.vue              # Archivo principal de la aplicación
├── nuxt.config.ts       # Configuración principal de Nuxt.js
├── package-lock.json    # Archivo de lock de dependencias (NPM)
├── package.json         # Archivo de configuración de dependencias y scripts
├── README.md            # Documentación del proyecto
├── tsconfig.json        # Configuración de TypeScript
├── yarn.lock            # Archivo de lock de dependencias (Yarn)
```

---

## Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas:

- **Framework:** Nuxt 3
- **Librerías:** 
  - TailwindCSS (para el diseño)
  - Pinia (para la gestión de estado)
- **Lenguajes:** JavaScript (ES6+), TypeScript
- **Sistema de diseño:** Vue.js
- **Dependencias adicionales:** 
  - Vue Router
  - Nuxt Icon (para íconos vectoriales)

---

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadida nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request en el repositorio original.

 
