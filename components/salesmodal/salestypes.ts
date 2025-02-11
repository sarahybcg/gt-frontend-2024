export type TipoVenta = "Paquete Turístico" | "Servicio Individual";

export type Servicio = "Hotel" | "Atracciones" | "Restaurante" | "Transporte";

export interface PaqueteTuristico {
  id: string;
  nombre: string;
  precio: number;
}

export interface ServicioIndividual {
  servicio: Servicio;
  cantidad: number;
  precioUnitario: number;
}

export type TipoAjuste = "Descuento" | "Impuesto" | "Recargo";

export interface Ajuste {
  tipo: TipoAjuste;
  tipoValor: 'porcentaje' | 'monto';
  valor: number;
  aplicarA: "Paquete" | "Servicio";
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