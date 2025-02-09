<template>
    <div>
      <!-- Barra lateral -->
      <aside
        :class="{
          'w-16': !expanded, /* Ancho cuando está colapsado */
          'w-64': expanded,  /* Ancho cuando está expandido */
        }"
        class="h-screen transition-all duration-300 transform ease-in-out bg-gradient-to-b from-[#003B73] to-[#00A6A6] fixed top-0 left-0"
      >
        <div class="h-full px-4 py-4">
          <div class="flex items-center mb-6">
            <!-- Logo -->
            <img src="../public/logo2.png" width="48px" height="auto" alt="" />
          </div>
  
          <!-- Botón para expandir/contraer barra lateral -->
            <!--<button
            @click="toggleExpand"
            class="text-white bg-[#FF6F61] hover:bg-[#FF6F61] p-0.5 rounded-full mb-4 w-8 h-8 flex items-center justify-center"
          
            <svg
              :class="{
                'rotate-180': !expanded,
                'rotate-0': expanded,
              }"
              class="w-4 h-4 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v10.293l3.646-3.647a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 14.293V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button> >-->
  
          <!-- Menú de navegación -->
          <ul class="space-y-2 font-medium">
            <!-- Iterar sobre la lista de enlaces -->
            <li v-for="item in list" :key="item.name" class="group">
              <NuxtLink :to="item.src" class="flex items-center p-2 rounded-lg text-white hover:bg-[#9DA8BB] group">
                <!-- Icono de FontAwesome -->
                <FontAwesomeIcon :icon="item.icon" class="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
  
                <!-- Título y subtítulo (solo visible si expandido) -->
                <span v-show="expanded" class="ms-3 overflow-hidden text-ellipsis whitespace-nowrap">
                  {{ item.name }}
                </span>
              </NuxtLink>
  
              <!-- Submenú, solo visible si está expandido -->
              <ul v-show="expanded" class="ml-6 space-y-2 group-hover:block hidden">
                <li v-for="submenuItem in item.submenu" :key="submenuItem.name">
                  <NuxtLink :to="submenuItem.src" class="flex items-center p-2 rounded-lg text-white hover:bg-[#9DA8BB] group">
                    <span class="ms-3 overflow-hidden text-ellipsis whitespace-nowrap">
                      {{ submenuItem.name }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
  
          <!-- Enlace de salida -->
        <ul class="pt-4 mt-4 space-y-2 font-medium absolute bottom-6 w-full">
        <li>
            <NuxtLink
            to="/logout" 
            class="flex items-center p-2 rounded-lg text-white bg-[#9DA8BB] hover:bg-[#FF6F61] group transition-colors"
            :class="expanded ? 'w-64' : 'w-fit'"
            style="margin-top: -20px; max-width: 90%;"
            >
            <!-- Icono de apagado -->
            <svg
                class="w-5 h-5 text-white group-hover:text-white transition duration-75"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1zm-6.364 4.636a1 1 0 000 1.414 8 8 0 1011.314 0 1 1 0 10-1.414-1.414 6 6 0 11-8.486 0 1 1 0 00-1.414-1.414z"/>
            </svg>
            <!-- Texto "Salir" (visible solo si está expandido) -->
            <span class="ms-3 text-white group-hover:text-white overflow-hidden text-ellipsis whitespace-nowrap" v-show="expanded">
                Salir
            </span>
            </NuxtLink>
        </li>
        </ul>

        </div>
      </aside>
  
      <!-- Contenido principal de la página -->
      <div class="ml-64 p-4">
        <!-- Aquí se puede agregar el contenido principal de la aplicación -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faChartBar, faDollarSign, faShoppingCart, faCube, faShoppingBag, faUsers, faStore, faTruck, faBuilding, faMap } from '@fortawesome/free-solid-svg-icons';
  
  const list = ref([
  { 
    name: 'Dashboard', 
    src: '/admin/dashboard', 
    icon: faChartBar
  },
  { 
    name: 'Finanzas', 
    src: '/admin/finanzas', 
    icon: faDollarSign,
    submenu: [
      { name: 'Presupuestos', src: '/admin/finanzas/presupuesto' }, 
      { name: 'Control de Gastos', src: '/admin/finanzas/control_gasto' }, 
      { name: 'Pagos y Cobros', src: '/admin/finanzas/pagos_cobros' },
      { name: 'Analisis', src: '/admin/finanzas/analisis' },
      { name: 'Reportes', src: '/admin/finanzas/reporte' }
    ]
  },
  { 
    name: 'Compra', 
    src: '/admin/compras', 
    icon: faShoppingCart,
    submenu: [
      { name: 'Órdenes', src: '/admin/compras/orden' },
      { name: 'Proveedores', src: '/admin/compras/historial' },
      { name: 'Historial', src: '/admin/compras/proveedores' }
    ]
  },
  { 
    name: 'Inventario', 
    src: '/admin/inventario', 
    icon: faCube,
    submenu: [
      { name: 'Gestión de productos', src: '/admin/inventario/1' }, 
      { name: 'Costos', src: '/admin/inventario/2' },
      { name: 'Movimientos Históricos', src: '/admin/inventario/2' },
      { name: 'Proyecciones', src: '/admin/inventario/2' }
    ]
  },
    { name: 'Ventas', 
    src: '/admin/ventas', 
    icon: faShoppingBag,
    submenu: [
      { name: 'Campañas', src: '/admin/inventario/1' },
      { name: 'Gestion de Leads', src: '/admin/inventario/2' },
      { name: 'Analisis', src: '/admin/inventario/3' },
      { name: 'Reportes', src: '/admin/inventario/4' }
    ] },
    { name: 'Recursos humano', 
    src: '/admin/recursos-humanos', 
    icon: faUsers,
    submenu: [ 
    { name: 'Empleados', src: '/admin/recursos-humanos/empleados' },
    { name: 'Capacitaciones', src: '/admin/recursos-humanos/capacitaciones' },
      { name: 'Nomina', src: '/admin/inventario/3' },
      { name: 'Agenda', src: '/admin/inventario/4' }
    ]  
    },
    { name: 'Restaurantes', src: '/admin/restaurantes', icon: faStore 
    },
    { name: 'Transporte', 
    src: '/admin/transporte', 
    icon: faTruck
    },
    { name: 'Hotel', 
    src: '/admin/hotel',
    icon: faBuilding
    },
    { name: 'Atracciones', 
    src: '/admin/atracciones', 
    icon: faMap
    
    },
  ]);
  
  // Variable para controlar la expansión de la barra lateral
  const expanded = ref(true);
  
  // Función para alternar el estado expandido/collapsado
  const toggleExpand = () => {
    expanded.value = !expanded.value;
  };
  </script>
  
  <style scoped>
  /* Estilo adicional */
  aside {
    transition: all 0.3s ease-in-out;
  }
  
  aside .rotate-180 {
    transform: rotate(180deg);
  }
  
  aside .rotate-0 {
    transform: rotate(0deg);
  }
  
  /* Controlar la expansión del submenú al pasar el mouse */
  .group:hover > .ml-6 {
    display: block;
  }
  
  .ml-6 {
    display: none;
    transition: display 0.3s ease-in-out;
  }
  </style>
  