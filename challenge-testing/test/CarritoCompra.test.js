const { CarritoCompra } = require("../index");

describe("La Clase CarritoCompra", () => {
  let carrito;
  let producto;
  let productos;

  beforeEach(() => {
    carrito = new CarritoCompra();
    producto = { name: "Producto A", price: 10 };
    productos = [
      { name: "Producto A", price: 10 },
      { name: "Producto B", price: 20 },
      { name: "Producto C", price: 30 },
    ];
  });

  const cargarCarrito = () => {
    productos.forEach((producto) => carrito.agregarProducto(producto));
  };

  it("Debe ser una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
  });

  it("Debe permitir definir una instancia de CarritoCompra", () => {
    expect(carrito).toBeInstanceOf(CarritoCompra);
  });

  it("Debe tener los siguientes métodos: Constructor, agregarProducto, calcularTotal, aplicarDescuento", () => {
    expect(CarritoCompra.prototype.constructor).toBeDefined();
    expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
    expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
  });

  it("Debe tener un constructor que inicialice un carrito con un array vacío", () => {
    expect(carrito.productos).toEqual([]);
  });

  it("Debe tener un método agregarProducto que permita agregar un objeto que es un producto con nombre y precio", () => {
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContainEqual({ name: "Producto A", price: 10 });
  });

  it("Debe tener un método agregarProducto que permita agregar varios objetos que son un productos con nombre y precio", () => {
    cargarCarrito();
    expect(carrito.productos).toContainEqual(
      { name: "Producto A", price: 10 },
      { name: "Producto B", price: 20 },
      { name: "Producto C", price: 30 }
    );
  });

  it("Debe tener un método calcularTotal que debe realizar la suma de los precios de los articulos del carrito", () => {
    cargarCarrito();
    expect(carrito.calcularTotal()).toBe(60);
  });

  it("Debe tener un método aplicarDescuento que Debe aplicar un porcentaje de descuento al total", () => {
    cargarCarrito();
    expect(carrito.aplicarDescuento(10)).toBe(54);
    expect(carrito.aplicarDescuento(20)).toBe(48);
    expect(carrito.aplicarDescuento(100)).toBe(0);
    expect(carrito.aplicarDescuento(0)).toBe(60);
  });
});
