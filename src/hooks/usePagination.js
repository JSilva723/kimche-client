import { useContext } from 'react';
import { AppContext, FIRST_PAGE } from '../utils';

export const usePagination = () => {
    const state = useContext(AppContext);
    const handlePrev = (page) => {
        if (page - 1 < FIRST_PAGE) return;
        state.setPage(page - 1);
    };
    const handleNext = (page) => {
        if (page + 1 > state.pages) return;
        state.setPage(page + 1);
    };
    return { state, handlePrev, handleNext };
};
