import { SPECIES_LIST, GENDER_LIST, STATUS_LIST } from '.';

export const SET_OPTION = 'SET_OPTION';
export const SET_PAGE = 'SET_PAGE';
export const SET_NAME = 'SET_NAME';
export const SET_CAHRACTERS = 'SET_CAHRACTERS';
export const RESET = 'RESET';

export const initialOption = {
    status: STATUS_LIST[0],
    gender: GENDER_LIST[0],
    species: SPECIES_LIST[0]
};

export const initalState = {
    page: 1,
    pages: 1,
    name: '',
    option: initialOption,
    chars: [],
    species: SPECIES_LIST
};

const OBJ_ACTIONS = {
    [SET_OPTION]: (state, payload) => ({ ...state, option: payload }),
    [SET_PAGE]: (state, payload) => ({ ...state, page: payload }),
    [SET_NAME]: (state, payload) => ({ ...state, name: payload }),
    [SET_CAHRACTERS]: (state, payload) => ({ ...state, ...payload }),
    [RESET]: (state, payload) => ({ ...state, ...payload })
};

export const appReducer = (state, action) => {
    return OBJ_ACTIONS[action.type](state, action.payload) || state;
};
