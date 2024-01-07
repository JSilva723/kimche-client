import { gql } from '@apollo/client';
import { createContext } from 'react';

export const AppContext = createContext();

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const mgrSpecies = (chars, speciesList) => {
    chars.forEach((element) => {
        if (!speciesList.includes(element.species)) {
            speciesList.push(element.species);
        }
    });
};

export const SPECIES_LIST = ['Species'];
export const STATUS_LIST = ['Status', 'Dead', 'Alive', 'Unknown'];
export const GENDER_LIST = ['Gender', 'Unknown', 'Female', 'Male', 'Genderless'];

export const filterBy = (chars, option) => {
    let arrRet = chars;
    ['status', 'gender', 'species'].forEach((key) => {
        if (option[key] && key.toLocaleLowerCase() !== option[key].toLocaleLowerCase()) {
            arrRet = arrRet.filter((item) => item[key].toLowerCase() === option[key].toLowerCase());
        }
    });

    return arrRet;
};

export const GET_PAGE = gql`
    query Page($page: Int, $name: String) {
        characters(page: $page, filter: { name: $name }) {
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
`;

export const GET_DIMENSION = gql`
    query Dimension($name: String) {
        locations(filter: { name: $name }) {
            results {
                dimension
            }
        }
    }
`;
