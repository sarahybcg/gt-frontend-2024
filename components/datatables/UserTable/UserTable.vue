<template src="./UserTable.html"></template>

<script>
export default {
  name: 'UserTable',
  data() {
    return {
      users: [
        {
          name: 'Juan Pérez',
          email: 'juan.perez@example.com',
          source: 'Redes Sociales',
          status: 'Nuevo',
          lastInteraction: '2025-01-20',
        },
        {
          name: 'María García',
          email: 'maria.garcia@example.com',
          source: 'Google ADS',
          status: 'En Seguimiento',
          lastInteraction: '2025-01-18',
        },
        {
          name: 'Carlos Rodríguez',
          email: 'carlos.rodriguez@example.com',
          source: 'Referido',
          status: 'Convertido',
          lastInteraction: '2025-01-15',
        },
        {
          name: 'Jorge Escalona',
          email: 'jorge.escalona@example.com',
          source: 'Redes Sociales',
          status: 'Nuevo',
          lastInteraction: '2025-01-10',
        },
        {
          name: 'Daniel Suarez',
          email: 'daniel.suarez@example.com',
          source: 'Redes Sociales',
          status: 'Nuevo',
          lastInteraction: '2025-01-10',
        },
      ],
    };
  },
};
</script>

<style scoped src="./UserTable.css"></style>
