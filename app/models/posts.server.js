export async function getPosts(){
    // eslint-disable-next-line no-undef
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await respuesta.json()
}

export async function getPost(url){
  // eslint-disable-next-line no-undef
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  return await respuesta.json()
}