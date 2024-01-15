import { useOutletContext } from '@remix-run/react';
import styles from '../styles/carrito.css'
import { ClientOnly } from 'remix-utils/client-only'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

export function meta() {
    return [
        { title: "GuitarLA - Carrito de compras" },
        { description: 'Venta de guitarras, blog, musica,carrito de compras, tienda' },
    ];
}

function Carrito() {

    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()


    return (
        <ClientOnly fallback={"Cargando..."}>
            {() => 
                <main className="contenedor">
                    <h1 className="heading">Carrito de compras</h1>

                    <div className="contenido">
                        <div className='carrito'>
                            <h2>Articulos</h2>
                            {carrito?.length === 0 ? 'carrito vacio' : (
                                carrito?.map(producto => (
                                    <div key={producto.id} className='producto'>
                                        <div>
                                            <img src={producto.imagen} alt={`imagen del producto ${producto.imagen}`} />
                                        </div>

                                        <div>
                                            <p className='nombre'>{producto.nombre}</p>
                                            <p>Cantidad: </p>
                                            <select
                                                value={producto.cantidad}
                                                className='select'
                                                onChange={e => actualizarCantidad({
                                                    cantidad: +e.target.value,
                                                    id: producto.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>

                                            <p className='precio'>$<span>{producto.precio}</span></p>
                                            <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                        </div>

                                        <button
                                            type='button'
                                            className='btn_eliminar'
                                            onClick={() => eliminarGuitarra(producto.id)}
                                        >X</button>
                                    </div>
                                ))
                            )}
                        </div>
                        <aside className="resumen">
                            <h3>Resumen del Pedido</h3>
                            <p>Total a pagar: <span>${carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)}</span></p>
                        </aside>
                    </div>
                </main>
            }
        </ClientOnly>
    )
}

export default Carrito