import {useLoaderData} from '@remix-run/react'
import {getPosts} from '../models/posts.server'
import ListadoPosts from '../components/listado-posts'
import styles from '../styles/blog.css'


export function meta({data}) {
    return [
      {title: 'GuitarLA - Nuestro Blog'},
      {descripcion: `Guitarras,Blog de musica y venta de guitarras, Guitarra No Encontrada `}
    ]
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    },
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  )
}

export default Blog