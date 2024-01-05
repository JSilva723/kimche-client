import { CardsContainer, Header, Pagination } from "./components"
import CardModal from "./components/CardModal"

const chars = [
    {
        id: 1,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:2,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:3,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:4,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:5,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:6,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:7,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:8,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:9,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:10,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    }, 
    {
        id:11,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:12,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:13,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:14,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:15,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:16,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:17,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:18,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:19,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
    {
        id:20,
        name: "Rick Sanchez",
        imgUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status:	"Alive",
        species:	"Human",
        type:	"",
        gender:	"Male",
        location: "location",
        origin: "origin",
        dimension: "dimension"
    },
]

function App() {

    return (
        <>
            <Header />
            <CardsContainer items={chars} />
            <Pagination />
        </>
    )
}

export default App