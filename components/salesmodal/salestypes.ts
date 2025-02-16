export type TipoVenta = "Paquete Turístico" | "Servicio Individual";

export type Servicio = "Hotel" | "Atracciones" | "Restaurante" | "Transporte";

export interface PaqueteTuristico {
  id: string;
  nombre: string;
  cantidadPaquetes: number; 
  precio: number;
  precioConIVA: number;
}

export interface ServicioIndividual {
  servicio: Servicio;
  cantidad: number;
  precioUnitario: number;
  precioConIVA: number;
}

export type TipoAjuste = "Descuento"; 

export interface Ajuste {
  tipo: TipoAjuste; 
  tipoValor: 'porcentaje' | 'monto';
  valor: number;
  descripcion?: string; 
}

export interface Venta {
  cliente: string;
  fecha: Date;
  tipoVenta: TipoVenta;
  metodoPago: string;
  paqueteTuristico?: PaqueteTuristico;
  serviciosIndividuales?: ServicioIndividual[];
  ajustes: Ajuste[];
  total: number;
}