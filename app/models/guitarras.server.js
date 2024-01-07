export async function getGuitarras(){
  // eslint-disable-next-line no-undef
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  return await respuesta.json()
}

export async function getGuitarra(url){
  // eslint-disable-next-line no-undef
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  return await respuesta.json()
}