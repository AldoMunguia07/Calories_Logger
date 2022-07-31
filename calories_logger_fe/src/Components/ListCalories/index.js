
import './ListCalories.css';
const ListCalories = ({ documents = [] }) => {
  const listItems = documents.map((o) => {
    return <ListItem key={o._id} {...o} />
  })
  return (
    <section>
      {listItems}
    </section>
  );
}
const ListItem = ({ calorias, tipoEjercicio, descripcion, fecha }) => {
  const formatearFecha = (fechaState) => {
    const fecha = fechaState.split('T')[0];
    const nuevaFecha = new Date(fecha).toLocaleDateString('HN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });

    return nuevaFecha;
  };
  return (
    <div className="calorias">
            <p>
                <span>Actividad: </span> {descripcion}
            </p>
            <p>
                <span>Calorias quemadas: </span>
                {calorias} Kcal
            </p>
            <p>
                <span>Descripción: </span> {tipoEjercicio}
            </p>
            <p>
                <span>Fecha: </span>
                {formatearFecha(fecha)}
            </p>
        </div>

  )
}
export default ListCalories;
