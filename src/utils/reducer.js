export const SET_OPTION = 'SET_OPTION';
export const SET_PAGE = 'SET_PAGE';
export const SET_NAME = 'SET_NAME';
export const SET_CAHRACTERS = 'SET_CAHRACTERS';

export const appReducer = (state, action) => {
    switch (action.type) {
        case SET_OPTION:
            return { ...state, option: action.payload };
        case SET_PAGE:
            return { ...state, page: action.payload };
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_CAHRACTERS:
            return { ...state, chars: action.payload.chars, pages: action.payload.pages };
        default:
            return state;
    }
};
