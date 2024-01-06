import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Header, Pagination, CardsContainer, Loader } from "./components"
import { AppContext, FIRST_PAGE, GET_PAGE, initialOptions } from './utils';


function App() {
    const [page, setPage] = useState(FIRST_PAGE)
    const [option, setOption] = useState(initialOptions)
    const [chars, setChars] = useState([])
    const { data, loading } = useQuery(GET_PAGE, {variables: {id: page}})

    useEffect(() => {
        if(data) setChars(data.characters.results)
    }, [data])

    return (
        <div className="flex flex-col h-screen bg-black">
            {loading && <Loader />}
            {!loading && data && 
                <AppContext.Provider 
                    value={{ 
                        chars,
                        pages: data.characters.info.pages,
                        page, 
                        setPage, 
                        option, 
                        setOption
                    }}
                >
                    <Header />
                    <CardsContainer />
                    <Pagination />
                </AppContext.Provider>
            }
        </div>
    )
}

export default App