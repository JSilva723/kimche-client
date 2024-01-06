import { Header, Pagination, Loader } from "./components"

function App() {

    return (
        <div className="flex flex-col h-screen bg-black">
            <Header />
            <Loader />
            <Pagination />
        </div>
    )
}

export default App