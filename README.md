# gestion-turismo

Este es un proyecto desarrollado con Vue.js, un framework destinado a construir interfaces de usuario. A continuación, encontrarás toda la información necesaria para configurar y trabajar con el proyecto.

## Tabla de Contenidos
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución y Scripts Disponibles](#ejecución-y-scripts-disponibles)
- [Configuración Recomendad para el IDE](#configuración-recomendada-para-el-ide)
- [Soporte de Tipos para Importaciones .vue en TS](#soporte-de-tipos-para-importaciones-vue-en-ts)
- [Estructura del Proyecto](#estructura-del-proyecto)

---

## Requisitos Previos

Para poder ejecutar este proyecto en tu entorno local, necesitas tener instalados los siguientes programas:

- Node.js (versión 12 o superior)
- npm (viene junto con Node.js)

### Verificar Instalación

Ejecuta los siguientes comandos en tu terminal para verificar si tienes las herramientas instaladas:

```bash
node -v
npm -v
```

Si no están instalados, por favor, dirígete a [Node.js Official Website](https://nodejs.org/) y sigue las instrucciones.

---

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. Clona el repositorio:

    ```bash
    git clone <url-del-repositorio>
    ```

2. Accede a la carpeta del proyecto:

    ```bash
    cd gestion-turismo
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

---

## Ejecución y Scripts Disponibles

El proyecto incluye los siguientes scripts que puedes ejecutar:

| Comando              | Descripción                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `npm run serve`      | Compila y recarga automáticamente para desarrollo utilizando Vue CLI. |
| `npm run build`      | Compila la aplicación para producción en la carpeta `dist`.          |
| `npm run lint`       | Ejecuta el linter para analizar y corregir problemas de estilo.      |

### Ejecución del Servidor de Desarrollo

Para iniciar el servidor de desarrollo y trabajar en tu proyecto, usa:

```bash
npm run serve
```

Esto iniciará un servidor local y podrás ver la aplicación en:

- Local: [http://localhost:8081/](http://localhost:8081/)
- Network: [http://10.2.0.2:8081/](http://10.2.0.2:8081/)

> **Nota:** El entorno de desarrollo no está optimizado. Para crear una compilación de producción, ejecuta `npm run build`.

---

## Configuración Recomendad para el IDE

Se recomienda usar [VSCode](https://code.visualstudio.com/) junto con la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar). Asegúrate de desactivar la extensión Vetur para evitar conflictos.

---

## Soporte de Tipos para Importaciones .vue en TS

Por defecto, TypeScript no puede manejar la información de tipos para las importaciones .vue. Para solucionar esto, usamos `vue-tsc` para la verificación de tipos. Asegúrate de tener instalada la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

---

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```plaintext
├── node_modules/        # Dependencias de Node.js
├── public/              # Archivos estáticos (favicon, index.html)
│   └── index.html
├── src/                 # Archivos fuente de la aplicación
│   ├── assets/          # Archivos estáticos como imágenes y estilos
│   ├── components/      # Componentes reutilizables de Vue
│   ├── views/           # Vistas principales del proyecto
│   ├── router/          # Configuración de rutas
│   │   └── index.js     # Archivo de configuración principal para las rutas
│   ├── App.vue          # Componente raíz de Vue
│   ├── main.js          # Archivo de entrada de JavaScript
├── package.json         # Información sobre el proyecto y sus dependencias
└── vue.config.js        # Archivo de configuración del proyecto Vue
```

