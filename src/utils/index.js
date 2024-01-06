import { gql } from '@apollo/client';
import { createContext } from 'react';

export const AppContext = createContext()

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const filterBy = (chars, filterBy) => {
    let arrRet = chars
    // eslint-disable-next-line no-prototype-builtins
    if (filterBy.hasOwnProperty('status') && filterBy.status) {
        arrRet = arrRet.filter(item => item.status === filterBy.status)
    }
    // eslint-disable-next-line no-prototype-builtins
    if (filterBy.hasOwnProperty('gender')  && filterBy.gender) {
        arrRet = arrRet.filter(item => item.gender === filterBy.gender)
    }

    return arrRet
}

export const FIRST_PAGE = 1

export const initialOptions = { status: '', gender: ''}

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