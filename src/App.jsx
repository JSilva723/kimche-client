import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Header, Pagination, Loader, CardsContainer } from "./components"
import { GET_PAGE } from "./services/graphql";

function App() {
    const [page, setPage] = useState(0);
    const {loading, error, data }   = useQuery(GET_PAGE, {variables: {id: page}})

    return (
        <div className="flex flex-col h-screen bg-black">
            {loading && <Loader />}
            {!loading && data && <Header />}
            {!loading && data &&  <CardsContainer items={data.characters.results}/>}
            {!loading && data && <Pagination page={page} pages={data.characters.info.pages} setPage={setPage}/>}
            {!loading && error && <h1>Ups !!!</h1>}
        </div>
    )
}

export default App