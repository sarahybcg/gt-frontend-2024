<template>

    <div class="container mx-auto px-4 py-0 "> 
        <SubNav module-name="Empleados" />
        
        <div class="max-w-6xl mx-auto">
            <div class="flex justify-between items-center mb-2"> 
                <!-- Buscador -->
                <div class="flex items-center space-x-2 flex-grow mr-4">
                    <i class="bx bx-search text-xl text-gray-600"></i>
                    <input 
                        type="text" 
                        placeholder="Buscar empleado" 
                        class="w-full border border-gray-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                </div>
                
                <button class="bg-blue-800 hover:bg-blue-600 text-white rounded-full font-bold shadow-md py-2 px-6 transition duration-300 ease-in-out whitespace-nowrap">Agregar Empleado</button>
            

            </div>

            <div class="container mx-auto px-4 ">
                
                <datatables-UserTable></datatables-UserTable>
                
            </div>
        </div>
    </div>
</template>
