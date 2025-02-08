<template>
    <div class="budget-creation">
  <h2>Crear un Presupuesto</h2>
  <form>
    <div class="form-group">
      <label for="department">Departamento</label>
      <select id="department" name="department">
        <option value="ventas">Ventas</option>
        <option value="marketing">Marketing</option>
        <option value="compras">Compras</option>
        <option value="transporte">Transporte</option>
        <option value="hoteleria">Hotelería</option>
      </select>
    </div>

    <div class="form-group">
      <label for="amount">Monto Asignado</label>
      <input type="number" id="amount" name="amount" placeholder="Monto del presupuesto" />
    </div>

    <div class="form-group">
      <label for="period">Periodo</label>
      <div class="period-group">
        <div class="date-group">
          <label for="start-date">Fecha de Inicio</label>
          <input type="date" id="start-date" name="start-date" />
        </div>
        <div class="date-group">
          <label for="end-date">Fecha Final</label>
          <input type="date" id="end-date" name="end-date" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="description">Descripción</label>
      <textarea id="description" name="description" placeholder="Descripción del presupuesto" rows="4"></textarea>
    </div>

    <div class="form-actions">
      <button type="back" class="cancel-button">Cancelar</button>
      <button type="submit" class="save-button">Guardar</button>
    </div>
  </form>
</div>
</template>

<script setup lang="ts">

</script>
<style>
.budget-creation {
  width: 500px; /* Ajusta el ancho */
  margin: 0 auto;
  padding: 20px; /* Ajusta el padding */
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.budget-creation label {
  display: block;
  margin-bottom: 5px;
  font-family: 'Lobster', sans-serif; 
  font-size: 14px; 
  color: #000000; 
}

.budget-creation input,
.budget-creation select,
.budget-creation textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(95, 82, 82);
}

.budget-creation .period-group {
  display: flex;
  gap: 10px;
}

.budget-creation button {
  padding: 10px 20px;
  background-color: #6d70f7;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(90, 82, 82);
  cursor: pointer;
}

.budget-creation .form-actions {
  display: flex;
  justify-content: space-between;
}

.budget-creation .form-actions button {
  margin-right: 10px;
}

.budget-creation .form-actions button:last-child {
  margin-right: 0;
}

.budget-creation .form-actions button:first-child {
  background-color: #ffffff; /* Rojo para el botón Cancelar */
}
</style>