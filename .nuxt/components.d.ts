
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AlertsAlertsPanelFinanzas': typeof import("../components/Alerts/Alerts_panel_finanzas/AlertsPanelFinanzas.vue")['default']
    'AlertsAlertsPanelMarketing': typeof import("../components/Alerts/Alerts_panel_marketing/AlertsPanelMarketing.vue")['default']
    'Button': typeof import("../components/Button.vue")['default']
    'Carousel': typeof import("../components/Carousel.vue")['default']
    'Container': typeof import("../components/Container.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'FooterAdmin': typeof import("../components/FooterAdmin.vue")['default']
    'GraphicsDoughnutChart': typeof import("../components/Graphics/Doughnut_Chart/DoughnutChart.vue")['default']
    'GraphicsLineChart': typeof import("../components/Graphics/Line_chart/LineChart.vue")['default']
    'GraphicsGraphicsIngresovsGasto': typeof import("../components/Graphics/graphicsIngresovsGasto/graphicsIngresovsGasto.vue")['default']
    'Label': typeof import("../components/Label.vue")['default']
    'Modal': typeof import("../components/Modal.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'Sidebar': typeof import("../components/Sidebar.vue")['default']
    'SubNav': typeof import("../components/SubNav.vue")['default']
    'Table': typeof import("../components/Table.vue")['default']
    'WidgetsContadorEmpleadosCEmpleados': typeof import("../components/Widgets/ContadorEmpleados/CEmpleados.vue")['default']
    'WidgetsGastosTotalesWidgets': typeof import("../components/Widgets/GastosTotales/widgets.vue")['default']
    'WidgetsMovimientosInvenMInventario': typeof import("../components/Widgets/MovimientosInven/MInventario.vue")['default']
    'WidgetsNewEmpleadosNEmpleados': typeof import("../components/Widgets/NewEmpleados/NEmpleados.vue")['default']
    'WidgetsReservasPendientesRPendientes': typeof import("../components/Widgets/ReservasPendientes/RPendientes.vue")['default']
    'WidgetsResumenCostosRcostos': typeof import("../components/Widgets/ResumenCostos/Rcostos.vue")['default']
    'WidgetsResumenOrden': typeof import("../components/Widgets/ResumenOrden/ResumenOrden.vue")['default']
    'WidgetsSolicitudesEmpleosSEmpleados': typeof import("../components/Widgets/SolicitudesEmpleos/SEmpleados.vue")['default']
    'WidgetsTotalVentasTventas': typeof import("../components/Widgets/TotalVentas/Tventas.vue")['default']
    'WidgetsWidget': typeof import("../components/Widgets/widget/widget.vue")['default']
    'WidgetsWidgets': typeof import("../components/Widgets/widgets/widgets.vue")['default']
    'Aside': typeof import("../components/aside.vue")['default']
    'CalendarioVCalendario': typeof import("../components/calendario/VCalendario.vue")['default']
    'CardsRatingcard': typeof import("../components/cards/ratingcard/ratingcard.vue")['default']
    'CardsTarjetacurso': typeof import("../components/cards/tarjetacurso/tarjetacurso.vue")['default']
    'DatatablesBudgetTable': typeof import("../components/datatables/BudgetTable/BudgetTable.vue")['default']
    'DatatablesCampaignTable': typeof import("../components/datatables/CampaignTable/CampaignTable.vue")['default']
    'DatatablesDatatablepriority': typeof import("../components/datatables/Datatablepriority/datatablepriority.vue")['default']
    'DatatablesDatatableproduct': typeof import("../components/datatables/Datatableproduct/datatableproduct.vue")['default']
    'DatatablesDatatableprosup': typeof import("../components/datatables/Datatableprosup/datatableprosup.vue")['default']
    'DatatablesDatatablesupplier': typeof import("../components/datatables/Datatablesupplier/datatablesupplier.vue")['default']
    'DatatablesDatatabletype': typeof import("../components/datatables/Datatabletype/datatabletype.vue")['default']
    'DatatablesPaymentTable': typeof import("../components/datatables/PaymentTable/PaymentTable.vue")['default']
    'DatatablesSupplierTable': typeof import("../components/datatables/SupplierTable/SupplierTable.vue")['default']
    'DatatablesUserTable': typeof import("../components/datatables/UserTable/UserTable.vue")['default']
    'FormsFormAddExpenses': typeof import("../components/forms/FormAddExpenses/AddExpenses.vue")['default']
    'FormsFormAddLead': typeof import("../components/forms/FormAddLead/AddLead.vue")['default']
    'FormsFormBudgetCreation': typeof import("../components/forms/FormBudgetCreation/BudgetCreation.vue")['default']
    'FormsFormCreateCampaign': typeof import("../components/forms/FormCreateCampaign/CreateCampaign.vue")['default']
    'FormsFormCreateEmployee1': typeof import("../components/forms/FormCreateEmployee1/CreateEmployee1.vue")['default']
    'FormsFormCreateEmployee2': typeof import("../components/forms/FormCreateEmployee2/CreateEmployee2.vue")['default']
    'FormsFormNewPost': typeof import("../components/forms/FormNewPost/NewPost.vue")['default']
    'FormsFormNewReport': typeof import("../components/forms/FormNewReport/NewReport.vue")['default']
    'FormsFormPaymentRegistration': typeof import("../components/forms/FormPaymentRegistration/PaymentRegistration.vue")['default']
    'FormsFormUpdateEmployee': typeof import("../components/forms/FormUpdateEmployee/UpdateEmployee.vue")['default']
    'PagesAdminDashboard': typeof import("../components/pages/admin/dashboard/index.vue")['default']
    'PagesAdmin': typeof import("../components/pages/admin/index.vue")['default']
    'PagesAdminProductos[code]': typeof import("../components/pages/admin/productos/[code].vue")['default']
    'PagesAdminProductosCreate': typeof import("../components/pages/admin/productos/create.vue")['default']
    'PagesAdminProductos': typeof import("../components/pages/admin/productos/index.vue")['default']
    'PagesAdminProductoscategoria': typeof import("../components/pages/admin/productoscategoria/index.vue")['default']
    'PagesAdminSubproductoscategoria': typeof import("../components/pages/admin/subproductoscategoria/index.vue")['default']
    'Pages': typeof import("../components/pages/index.vue")['default']
    'PagesLogin': typeof import("../components/pages/login/index.vue")['default']
    'PagesProductos[code]': typeof import("../components/pages/productos/[code].vue")['default']
    'PagesProductosCreate': typeof import("../components/pages/productos/create.vue")['default']
    'PagesProductos': typeof import("../components/pages/productos/index.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAlertsAlertsPanelFinanzas': typeof import("../components/Alerts/Alerts_panel_finanzas/AlertsPanelFinanzas.vue")['default']
    'LazyAlertsAlertsPanelMarketing': typeof import("../components/Alerts/Alerts_panel_marketing/AlertsPanelMarketing.vue")['default']
    'LazyButton': typeof import("../components/Button.vue")['default']
    'LazyCarousel': typeof import("../components/Carousel.vue")['default']
    'LazyContainer': typeof import("../components/Container.vue")['default']
    'LazyFooter': typeof import("../components/Footer.vue")['default']
    'LazyFooterAdmin': typeof import("../components/FooterAdmin.vue")['default']
    'LazyGraphicsDoughnutChart': typeof import("../components/Graphics/Doughnut_Chart/DoughnutChart.vue")['default']
    'LazyGraphicsLineChart': typeof import("../components/Graphics/Line_chart/LineChart.vue")['default']
    'LazyGraphicsGraphicsIngresovsGasto': typeof import("../components/Graphics/graphicsIngresovsGasto/graphicsIngresovsGasto.vue")['default']
    'LazyLabel': typeof import("../components/Label.vue")['default']
    'LazyModal': typeof import("../components/Modal.vue")['default']
    'LazyNavbar': typeof import("../components/Navbar.vue")['default']
    'LazySidebar': typeof import("../components/Sidebar.vue")['default']
    'LazySubNav': typeof import("../components/SubNav.vue")['default']
    'LazyTable': typeof import("../components/Table.vue")['default']
    'LazyWidgetsContadorEmpleadosCEmpleados': typeof import("../components/Widgets/ContadorEmpleados/CEmpleados.vue")['default']
    'LazyWidgetsGastosTotalesWidgets': typeof import("../components/Widgets/GastosTotales/widgets.vue")['default']
    'LazyWidgetsMovimientosInvenMInventario': typeof import("../components/Widgets/MovimientosInven/MInventario.vue")['default']
    'LazyWidgetsNewEmpleadosNEmpleados': typeof import("../components/Widgets/NewEmpleados/NEmpleados.vue")['default']
    'LazyWidgetsReservasPendientesRPendientes': typeof import("../components/Widgets/ReservasPendientes/RPendientes.vue")['default']
    'LazyWidgetsResumenCostosRcostos': typeof import("../components/Widgets/ResumenCostos/Rcostos.vue")['default']
    'LazyWidgetsResumenOrden': typeof import("../components/Widgets/ResumenOrden/ResumenOrden.vue")['default']
    'LazyWidgetsSolicitudesEmpleosSEmpleados': typeof import("../components/Widgets/SolicitudesEmpleos/SEmpleados.vue")['default']
    'LazyWidgetsTotalVentasTventas': typeof import("../components/Widgets/TotalVentas/Tventas.vue")['default']
    'LazyWidgetsWidget': typeof import("../components/Widgets/widget/widget.vue")['default']
    'LazyWidgetsWidgets': typeof import("../components/Widgets/widgets/widgets.vue")['default']
    'LazyAside': typeof import("../components/aside.vue")['default']
    'LazyCalendarioVCalendario': typeof import("../components/calendario/VCalendario.vue")['default']
    'LazyCardsRatingcard': typeof import("../components/cards/ratingcard/ratingcard.vue")['default']
    'LazyCardsTarjetacurso': typeof import("../components/cards/tarjetacurso/tarjetacurso.vue")['default']
    'LazyDatatablesBudgetTable': typeof import("../components/datatables/BudgetTable/BudgetTable.vue")['default']
    'LazyDatatablesCampaignTable': typeof import("../components/datatables/CampaignTable/CampaignTable.vue")['default']
    'LazyDatatablesDatatablepriority': typeof import("../components/datatables/Datatablepriority/datatablepriority.vue")['default']
    'LazyDatatablesDatatableproduct': typeof import("../components/datatables/Datatableproduct/datatableproduct.vue")['default']
    'LazyDatatablesDatatableprosup': typeof import("../components/datatables/Datatableprosup/datatableprosup.vue")['default']
    'LazyDatatablesDatatablesupplier': typeof import("../components/datatables/Datatablesupplier/datatablesupplier.vue")['default']
    'LazyDatatablesDatatabletype': typeof import("../components/datatables/Datatabletype/datatabletype.vue")['default']
    'LazyDatatablesPaymentTable': typeof import("../components/datatables/PaymentTable/PaymentTable.vue")['default']
    'LazyDatatablesSupplierTable': typeof import("../components/datatables/SupplierTable/SupplierTable.vue")['default']
    'LazyDatatablesUserTable': typeof import("../components/datatables/UserTable/UserTable.vue")['default']
    'LazyFormsFormAddExpenses': typeof import("../components/forms/FormAddExpenses/AddExpenses.vue")['default']
    'LazyFormsFormAddLead': typeof import("../components/forms/FormAddLead/AddLead.vue")['default']
    'LazyFormsFormBudgetCreation': typeof import("../components/forms/FormBudgetCreation/BudgetCreation.vue")['default']
    'LazyFormsFormCreateCampaign': typeof import("../components/forms/FormCreateCampaign/CreateCampaign.vue")['default']
    'LazyFormsFormCreateEmployee1': typeof import("../components/forms/FormCreateEmployee1/CreateEmployee1.vue")['default']
    'LazyFormsFormCreateEmployee2': typeof import("../components/forms/FormCreateEmployee2/CreateEmployee2.vue")['default']
    'LazyFormsFormNewPost': typeof import("../components/forms/FormNewPost/NewPost.vue")['default']
    'LazyFormsFormNewReport': typeof import("../components/forms/FormNewReport/NewReport.vue")['default']
    'LazyFormsFormPaymentRegistration': typeof import("../components/forms/FormPaymentRegistration/PaymentRegistration.vue")['default']
    'LazyFormsFormUpdateEmployee': typeof import("../components/forms/FormUpdateEmployee/UpdateEmployee.vue")['default']
    'LazyPagesAdminDashboard': typeof import("../components/pages/admin/dashboard/index.vue")['default']
    'LazyPagesAdmin': typeof import("../components/pages/admin/index.vue")['default']
    'LazyPagesAdminProductos[code]': typeof import("../components/pages/admin/productos/[code].vue")['default']
    'LazyPagesAdminProductosCreate': typeof import("../components/pages/admin/productos/create.vue")['default']
    'LazyPagesAdminProductos': typeof import("../components/pages/admin/productos/index.vue")['default']
    'LazyPagesAdminProductoscategoria': typeof import("../components/pages/admin/productoscategoria/index.vue")['default']
    'LazyPagesAdminSubproductoscategoria': typeof import("../components/pages/admin/subproductoscategoria/index.vue")['default']
    'LazyPages': typeof import("../components/pages/index.vue")['default']
    'LazyPagesLogin': typeof import("../components/pages/login/index.vue")['default']
    'LazyPagesProductos[code]': typeof import("../components/pages/productos/[code].vue")['default']
    'LazyPagesProductosCreate': typeof import("../components/pages/productos/create.vue")['default']
    'LazyPagesProductos': typeof import("../components/pages/productos/index.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AlertsAlertsPanelFinanzas: typeof import("../components/Alerts/Alerts_panel_finanzas/AlertsPanelFinanzas.vue")['default']
export const AlertsAlertsPanelMarketing: typeof import("../components/Alerts/Alerts_panel_marketing/AlertsPanelMarketing.vue")['default']
export const Button: typeof import("../components/Button.vue")['default']
export const Carousel: typeof import("../components/Carousel.vue")['default']
export const Container: typeof import("../components/Container.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const FooterAdmin: typeof import("../components/FooterAdmin.vue")['default']
export const GraphicsDoughnutChart: typeof import("../components/Graphics/Doughnut_Chart/DoughnutChart.vue")['default']
export const GraphicsLineChart: typeof import("../components/Graphics/Line_chart/LineChart.vue")['default']
export const GraphicsGraphicsIngresovsGasto: typeof import("../components/Graphics/graphicsIngresovsGasto/graphicsIngresovsGasto.vue")['default']
export const Label: typeof import("../components/Label.vue")['default']
export const Modal: typeof import("../components/Modal.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const Sidebar: typeof import("../components/Sidebar.vue")['default']
export const SubNav: typeof import("../components/SubNav.vue")['default']
export const Table: typeof import("../components/Table.vue")['default']
export const WidgetsContadorEmpleadosCEmpleados: typeof import("../components/Widgets/ContadorEmpleados/CEmpleados.vue")['default']
export const WidgetsGastosTotalesWidgets: typeof import("../components/Widgets/GastosTotales/widgets.vue")['default']
export const WidgetsMovimientosInvenMInventario: typeof import("../components/Widgets/MovimientosInven/MInventario.vue")['default']
export const WidgetsNewEmpleadosNEmpleados: typeof import("../components/Widgets/NewEmpleados/NEmpleados.vue")['default']
export const WidgetsReservasPendientesRPendientes: typeof import("../components/Widgets/ReservasPendientes/RPendientes.vue")['default']
export const WidgetsResumenCostosRcostos: typeof import("../components/Widgets/ResumenCostos/Rcostos.vue")['default']
export const WidgetsResumenOrden: typeof import("../components/Widgets/ResumenOrden/ResumenOrden.vue")['default']
export const WidgetsSolicitudesEmpleosSEmpleados: typeof import("../components/Widgets/SolicitudesEmpleos/SEmpleados.vue")['default']
export const WidgetsTotalVentasTventas: typeof import("../components/Widgets/TotalVentas/Tventas.vue")['default']
export const WidgetsWidget: typeof import("../components/Widgets/widget/widget.vue")['default']
export const WidgetsWidgets: typeof import("../components/Widgets/widgets/widgets.vue")['default']
export const Aside: typeof import("../components/aside.vue")['default']
export const CalendarioVCalendario: typeof import("../components/calendario/VCalendario.vue")['default']
export const CardsRatingcard: typeof import("../components/cards/ratingcard/ratingcard.vue")['default']
export const CardsTarjetacurso: typeof import("../components/cards/tarjetacurso/tarjetacurso.vue")['default']
export const DatatablesBudgetTable: typeof import("../components/datatables/BudgetTable/BudgetTable.vue")['default']
export const DatatablesCampaignTable: typeof import("../components/datatables/CampaignTable/CampaignTable.vue")['default']
export const DatatablesDatatablepriority: typeof import("../components/datatables/Datatablepriority/datatablepriority.vue")['default']
export const DatatablesDatatableproduct: typeof import("../components/datatables/Datatableproduct/datatableproduct.vue")['default']
export const DatatablesDatatableprosup: typeof import("../components/datatables/Datatableprosup/datatableprosup.vue")['default']
export const DatatablesDatatablesupplier: typeof import("../components/datatables/Datatablesupplier/datatablesupplier.vue")['default']
export const DatatablesDatatabletype: typeof import("../components/datatables/Datatabletype/datatabletype.vue")['default']
export const DatatablesPaymentTable: typeof import("../components/datatables/PaymentTable/PaymentTable.vue")['default']
export const DatatablesSupplierTable: typeof import("../components/datatables/SupplierTable/SupplierTable.vue")['default']
export const DatatablesUserTable: typeof import("../components/datatables/UserTable/UserTable.vue")['default']
export const FormsFormAddExpenses: typeof import("../components/forms/FormAddExpenses/AddExpenses.vue")['default']
export const FormsFormAddLead: typeof import("../components/forms/FormAddLead/AddLead.vue")['default']
export const FormsFormBudgetCreation: typeof import("../components/forms/FormBudgetCreation/BudgetCreation.vue")['default']
export const FormsFormCreateCampaign: typeof import("../components/forms/FormCreateCampaign/CreateCampaign.vue")['default']
export const FormsFormCreateEmployee1: typeof import("../components/forms/FormCreateEmployee1/CreateEmployee1.vue")['default']
export const FormsFormCreateEmployee2: typeof import("../components/forms/FormCreateEmployee2/CreateEmployee2.vue")['default']
export const FormsFormNewPost: typeof import("../components/forms/FormNewPost/NewPost.vue")['default']
export const FormsFormNewReport: typeof import("../components/forms/FormNewReport/NewReport.vue")['default']
export const FormsFormPaymentRegistration: typeof import("../components/forms/FormPaymentRegistration/PaymentRegistration.vue")['default']
export const FormsFormUpdateEmployee: typeof import("../components/forms/FormUpdateEmployee/UpdateEmployee.vue")['default']
export const PagesAdminDashboard: typeof import("../components/pages/admin/dashboard/index.vue")['default']
export const PagesAdmin: typeof import("../components/pages/admin/index.vue")['default']
export const PagesAdminProductos[code]: typeof import("../components/pages/admin/productos/[code].vue")['default']
export const PagesAdminProductosCreate: typeof import("../components/pages/admin/productos/create.vue")['default']
export const PagesAdminProductos: typeof import("../components/pages/admin/productos/index.vue")['default']
export const PagesAdminProductoscategoria: typeof import("../components/pages/admin/productoscategoria/index.vue")['default']
export const PagesAdminSubproductoscategoria: typeof import("../components/pages/admin/subproductoscategoria/index.vue")['default']
export const Pages: typeof import("../components/pages/index.vue")['default']
export const PagesLogin: typeof import("../components/pages/login/index.vue")['default']
export const PagesProductos[code]: typeof import("../components/pages/productos/[code].vue")['default']
export const PagesProductosCreate: typeof import("../components/pages/productos/create.vue")['default']
export const PagesProductos: typeof import("../components/pages/productos/index.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAlertsAlertsPanelFinanzas: typeof import("../components/Alerts/Alerts_panel_finanzas/AlertsPanelFinanzas.vue")['default']
export const LazyAlertsAlertsPanelMarketing: typeof import("../components/Alerts/Alerts_panel_marketing/AlertsPanelMarketing.vue")['default']
export const LazyButton: typeof import("../components/Button.vue")['default']
export const LazyCarousel: typeof import("../components/Carousel.vue")['default']
export const LazyContainer: typeof import("../components/Container.vue")['default']
export const LazyFooter: typeof import("../components/Footer.vue")['default']
export const LazyFooterAdmin: typeof import("../components/FooterAdmin.vue")['default']
export const LazyGraphicsDoughnutChart: typeof import("../components/Graphics/Doughnut_Chart/DoughnutChart.vue")['default']
export const LazyGraphicsLineChart: typeof import("../components/Graphics/Line_chart/LineChart.vue")['default']
export const LazyGraphicsGraphicsIngresovsGasto: typeof import("../components/Graphics/graphicsIngresovsGasto/graphicsIngresovsGasto.vue")['default']
export const LazyLabel: typeof import("../components/Label.vue")['default']
export const LazyModal: typeof import("../components/Modal.vue")['default']
export const LazyNavbar: typeof import("../components/Navbar.vue")['default']
export const LazySidebar: typeof import("../components/Sidebar.vue")['default']
export const LazySubNav: typeof import("../components/SubNav.vue")['default']
export const LazyTable: typeof import("../components/Table.vue")['default']
export const LazyWidgetsContadorEmpleadosCEmpleados: typeof import("../components/Widgets/ContadorEmpleados/CEmpleados.vue")['default']
export const LazyWidgetsGastosTotalesWidgets: typeof import("../components/Widgets/GastosTotales/widgets.vue")['default']
export const LazyWidgetsMovimientosInvenMInventario: typeof import("../components/Widgets/MovimientosInven/MInventario.vue")['default']
export const LazyWidgetsNewEmpleadosNEmpleados: typeof import("../components/Widgets/NewEmpleados/NEmpleados.vue")['default']
export const LazyWidgetsReservasPendientesRPendientes: typeof import("../components/Widgets/ReservasPendientes/RPendientes.vue")['default']
export const LazyWidgetsResumenCostosRcostos: typeof import("../components/Widgets/ResumenCostos/Rcostos.vue")['default']
export const LazyWidgetsResumenOrden: typeof import("../components/Widgets/ResumenOrden/ResumenOrden.vue")['default']
export const LazyWidgetsSolicitudesEmpleosSEmpleados: typeof import("../components/Widgets/SolicitudesEmpleos/SEmpleados.vue")['default']
export const LazyWidgetsTotalVentasTventas: typeof import("../components/Widgets/TotalVentas/Tventas.vue")['default']
export const LazyWidgetsWidget: typeof import("../components/Widgets/widget/widget.vue")['default']
export const LazyWidgetsWidgets: typeof import("../components/Widgets/widgets/widgets.vue")['default']
export const LazyAside: typeof import("../components/aside.vue")['default']
export const LazyCalendarioVCalendario: typeof import("../components/calendario/VCalendario.vue")['default']
export const LazyCardsRatingcard: typeof import("../components/cards/ratingcard/ratingcard.vue")['default']
export const LazyCardsTarjetacurso: typeof import("../components/cards/tarjetacurso/tarjetacurso.vue")['default']
export const LazyDatatablesBudgetTable: typeof import("../components/datatables/BudgetTable/BudgetTable.vue")['default']
export const LazyDatatablesCampaignTable: typeof import("../components/datatables/CampaignTable/CampaignTable.vue")['default']
export const LazyDatatablesDatatablepriority: typeof import("../components/datatables/Datatablepriority/datatablepriority.vue")['default']
export const LazyDatatablesDatatableproduct: typeof import("../components/datatables/Datatableproduct/datatableproduct.vue")['default']
export const LazyDatatablesDatatableprosup: typeof import("../components/datatables/Datatableprosup/datatableprosup.vue")['default']
export const LazyDatatablesDatatablesupplier: typeof import("../components/datatables/Datatablesupplier/datatablesupplier.vue")['default']
export const LazyDatatablesDatatabletype: typeof import("../components/datatables/Datatabletype/datatabletype.vue")['default']
export const LazyDatatablesPaymentTable: typeof import("../components/datatables/PaymentTable/PaymentTable.vue")['default']
export const LazyDatatablesSupplierTable: typeof import("../components/datatables/SupplierTable/SupplierTable.vue")['default']
export const LazyDatatablesUserTable: typeof import("../components/datatables/UserTable/UserTable.vue")['default']
export const LazyFormsFormAddExpenses: typeof import("../components/forms/FormAddExpenses/AddExpenses.vue")['default']
export const LazyFormsFormAddLead: typeof import("../components/forms/FormAddLead/AddLead.vue")['default']
export const LazyFormsFormBudgetCreation: typeof import("../components/forms/FormBudgetCreation/BudgetCreation.vue")['default']
export const LazyFormsFormCreateCampaign: typeof import("../components/forms/FormCreateCampaign/CreateCampaign.vue")['default']
export const LazyFormsFormCreateEmployee1: typeof import("../components/forms/FormCreateEmployee1/CreateEmployee1.vue")['default']
export const LazyFormsFormCreateEmployee2: typeof import("../components/forms/FormCreateEmployee2/CreateEmployee2.vue")['default']
export const LazyFormsFormNewPost: typeof import("../components/forms/FormNewPost/NewPost.vue")['default']
export const LazyFormsFormNewReport: typeof import("../components/forms/FormNewReport/NewReport.vue")['default']
export const LazyFormsFormPaymentRegistration: typeof import("../components/forms/FormPaymentRegistration/PaymentRegistration.vue")['default']
export const LazyFormsFormUpdateEmployee: typeof import("../components/forms/FormUpdateEmployee/UpdateEmployee.vue")['default']
export const LazyPagesAdminDashboard: typeof import("../components/pages/admin/dashboard/index.vue")['default']
export const LazyPagesAdmin: typeof import("../components/pages/admin/index.vue")['default']
export const LazyPagesAdminProductos[code]: typeof import("../components/pages/admin/productos/[code].vue")['default']
export const LazyPagesAdminProductosCreate: typeof import("../components/pages/admin/productos/create.vue")['default']
export const LazyPagesAdminProductos: typeof import("../components/pages/admin/productos/index.vue")['default']
export const LazyPagesAdminProductoscategoria: typeof import("../components/pages/admin/productoscategoria/index.vue")['default']
export const LazyPagesAdminSubproductoscategoria: typeof import("../components/pages/admin/subproductoscategoria/index.vue")['default']
export const LazyPages: typeof import("../components/pages/index.vue")['default']
export const LazyPagesLogin: typeof import("../components/pages/login/index.vue")['default']
export const LazyPagesProductos[code]: typeof import("../components/pages/productos/[code].vue")['default']
export const LazyPagesProductosCreate: typeof import("../components/pages/productos/create.vue")['default']
export const LazyPagesProductos: typeof import("../components/pages/productos/index.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
