export class Producto {
    _id: string
    nombre: string
    stock: number
    proveedor: string

    constructor(_id: string, nombre: string, stock: number, proveedor: string){
        this._id = _id
        this.nombre= nombre
        this.stock=stock
        this.proveedor=proveedor
    }
    
}
