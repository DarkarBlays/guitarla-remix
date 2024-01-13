import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import { getCurso } from '../models/curso.server'
import { getPosts } from '../models/posts.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPosts from '~/components/listado-posts'
import stylesPosts from '../styles/blog.css'
import stylesGuitarras from '../styles/guitarras.css'
import stylesCurso from '../styles/curso.css'
import Curso from '~/components/curso'




export function meta() {
  return [
    { title: 'GuitarLA - Nuestro Blog' },
    { descripcion: `Guitarras,Blog de musica y venta de guitarras, Guitarra No Encontrada ` }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    },
  ]
}

export async function loader() {

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(), getPosts(), getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>
      <Curso
        curso={curso.attributes}
      />
      <section className='contenedor'>
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index