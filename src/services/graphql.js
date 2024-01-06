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
                id
            }
            origin {
                name
            }
            status
            image
        }
    }
}
`;

