import Guitarra from '../components/guitarra'

export default function ListadoGuitarras({guitarras}) {
  return (
    <>
      <h2 className="heading">Nuestra Coleccion</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </>
  );
}
