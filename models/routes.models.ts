export const Routes = {
	HOME: { path: "/", name: "Inicio" },
	PRODUCTS: { path: "/Productos/Productos", name: "Productos" },
	SALE: { path: "/ofertas", name: "Ofertas" },
	CONTACT: { path: "/contacto", name: "Contacto" },
};

export interface Route {
	path: string;
	name: string;
}
