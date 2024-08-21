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
