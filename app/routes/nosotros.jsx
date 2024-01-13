import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
import {useOutletContext} from '@remix-run/react'

export function meta() {
  return [
    { title: "GuitarLA - Sobre Nosotros" },
    { description: 'Venta de guitarras, blog de musica'},
  ];
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image' 
    }
  ]
}


function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>Morbi a auctor dui, vel aliquet elit. Phasellus orci tellus, mollis at arcu ut, viverra scelerisque odio. In consectetur tellus at leo posuere, a tristique lectus ultrices. Maecenas consectetur neque justo. Cras ex velit, aliquet eget suscipit sed, commodo et eros. Mauris pharetra sapien turpis, quis interdum arcu faucibus non. Phasellus aliquet ex a dolor feugiat varius. Ut viverra ac metus vel pellentesque. Suspendisse volutpat tellus lectus, vel auctor sem condimentum vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas consectetur risus sed metus rutrum, eu rhoncus lorem ornare.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros