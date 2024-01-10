import { useContext } from 'react';
import { SET_PAGE } from '../utils/reducer';
import { AppContext } from '../context/AppContext';

export const usePagination = () => {
    const { state, dispatch } = useContext(AppContext);
    const handlePrev = (page) => {
        if (page - 1 < 1) return;
        dispatch({
            type: SET_PAGE,
            payload: page - 1
        });
    };
    const handleNext = (page) => {
        if (page + 1 > state.pages) return;
        dispatch({
            type: SET_PAGE,
            payload: page + 1
        });
    };

    return { state, handlePrev, handleNext };
};
