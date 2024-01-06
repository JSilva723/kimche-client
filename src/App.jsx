import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Header, Pagination, CardsContainer, Loader } from "./components"
import { AppContext, GET_PAGE, initialOptions } from './utils';


function App() {
    const [page, setPage] = useState(0)
    const [option, setOption] = useState(initialOptions)
    const { data, loading } = useQuery(GET_PAGE, {variables: {id: page}})

    return (
        <div className="flex flex-col h-screen bg-black">
            {loading && <Loader />}
            {!loading && data && 
                <AppContext.Provider value={{ data, page, setPage, option, setOption}}>
                    <Header />
                    <CardsContainer />
                    <Pagination />
                </AppContext.Provider>
            }
        </div>
    )
}

export default App