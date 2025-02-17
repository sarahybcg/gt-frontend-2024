<template>
  <div class="container">
    <div>
             <h1>CALENDARIO</h1>  
    </div>
  </div>
  </template>
<script  > 
</script>

<style scoped>
/* Estilos generales para contenedores y secciones */
.container {
display: flex;
flex-direction: column;
gap: 2rem; /* Espacio entre secciones */
padding: 1rem;
}

.section {
padding: 1rem;
border: 1px solid #ffffff;
border-radius: 4px;
background-color: #ffffff;
}

h1 {
font-size: 2rem;
color: #333;
margin-bottom: 1rem;
}

/* Contenedor de grid para organizar los componentes */
.grid-container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 1rem; /* Espacio entre cada componente */
}

/* Opcional: Estilos para cada componente individual */
.grid-item {
background: #ffffff;
padding: 0.5rem;
border: 1px solid #ffffff;
border-radius: 4px;
}
</style>

