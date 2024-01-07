import { useEffect, useReducer } from 'react';
import { useQuery } from '@apollo/client';
import { Header, Pagination, CardsContainer, Loader } from './components';
import { AppContext, GET_PAGE } from './utils';
import { SET_CAHRACTERS, appReducer, initalState } from './utils/reducer';

function App() {
    const [state, dispatch] = useReducer(appReducer, initalState);
    const { data, loading, error } = useQuery(GET_PAGE, {
        variables: { page: state.page, name: state.name }
    });

    useEffect(() => {
        if (data) {
            dispatch({
                type: SET_CAHRACTERS,
                payload: { chars: data.characters.results, pages: data.characters.info.pages }
            });
        }
    }, [data]);

    return (
        <div className="flex flex-col h-screen bg-black">
            {loading && <Loader />}
            {!loading && error && <h1>Error !!!</h1>}
            {!loading && data && (
                <AppContext.Provider value={{ state, dispatch }}>
                    <Header />
                    <CardsContainer />
                    <Pagination />
                </AppContext.Provider>
            )}
        </div>
    );
}

export default App;
