class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach((producto) => {
      total = total + producto.price;
    });
    return total;
  }

  aplicarDescuento(porcentaje) {
    let totalCompra = this.calcularTotal();
    let totalConDto;
    const porcentajeNumerico = parseFloat(porcentaje) / 100;
    totalConDto = totalCompra - totalCompra * porcentajeNumerico;
    return totalConDto;
  }
}

module.exports = {
  CarritoCompra,
};

/* const compra = new CarritoCompra();
compra.agregarProducto({ name: "Producto A", price: 10 });
compra.agregarProducto({ name: "Producto B", price: 20 });
compra.agregarProducto({ name: "Producto C", price: 30 });
console.log(compra.productos);
console.log(compra.calcularTotal());
console.log(compra.aplicarDescuento(20)); */

/* const productos = [
  { name: "Producto A", price: 10 },
  { name: "Producto B", price: 20 },
  { name: "Producto C", price: 30 },
];
 */

/* 


aplicarDescuento(porcentaje) {
    let totalConDto;
    totalConDto = this.total - this.total * porcentaje;
    return totalConDto;
  } */
