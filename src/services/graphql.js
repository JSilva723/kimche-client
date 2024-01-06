import { gql } from '@apollo/client';

export const GET_PAGE = gql`
query Page($id: Int) {
    characters(page: $id) {
        info { 
            pages
        }
        results {
            id
            name
            species
            type
            gender
            location {
                name
            }
            origin {
                name
            }
            status
            image
        }
    }
}
`


export const GET_DIMENSION = gql`
query Dimension($name: String){
    locations(filter: {name: $name}) {
        results {
             dimension
        }
    }
}
`
