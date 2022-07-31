import { useEffect, useState } from 'react';
import calorias from '../../Services/api/calorias';
import Spinner from '../../Components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getCaloriesDocuments } from './CaloriasActions';
import Paging from '../../Components/Paging';
import ListCalories from '../../Components/ListCalories';

const Calorias = () => {
    const [caloriasState, setCaloriasState] = useState([]);
    const [cargando, setcargando] = useState(true);
    const dispatch = useDispatch();
    const { documents } = useSelector(state => state.calorias);
    useEffect(() => {

        getCaloriesDocuments(dispatch, documents.page, documents.pageLimit);
      },
        []);

    useEffect(() => {
        const consultarCalorias = async () => {
            try {
                const { data } = await calorias();

                setcargando(true);

                setCaloriasState(data);
            } catch (error) {
                console.log(error);
            }

            setcargando(false);
        };

        consultarCalorias();
    }, []);
    console.log(documents);
    const Pager = () => {
        if (documents.totalPages > 1) {
          return (<Paging currentPage={documents.page}
            totalPages={documents.totalPages}
            pageLimit={documents.pageLimit}
            onPageChange={(page) => getCaloriesDocuments(dispatch, page, documents.pageLimit)}
            onLimitChange={(e) => getCaloriesDocuments(dispatch, documents.page, e.target.value)}>
          </Paging>
          )
        }
        return null;
      }
    return (

        <div>
            {cargando ? (
                <Spinner />
            ) : caloriasState.length ? (
                <>

                    <div className="scroll">
                        <h2 className="calorias-titulo">Tu actividad</h2>
                        <Pager />
                        <ListCalories documents={documents.calorias}></ListCalories>
                        <Pager />

                    </div>
                </>
            ) : (
                <>
                    <p className="sin-calorias">
                        No hay calorias aun, comienza quemando algunas
                    </p>
                </>
            )}
        </div>
    );
};

export default Calorias;
