import PropTypes from 'prop-types';
import { usePagination } from '../hooks/usePagination';
import ButtonIcon from './ui/ButtonIcon';

const Pagination = () => {
    const { state, handlePrev, handleNext } = usePagination();

    return (
        <div className="flex items-center justify-center border-t border-gray-200 px-4 py-3">
            <nav className="flex" aria-label="Pagination">
                <ButtonIcon type="left" icon="chevLeft" onClick={() => handlePrev(state.page)} />
                <span className="px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-black">
                    Page: {state.page} / {state.pages}
                </span>
                <ButtonIcon type="right" icon="chefRight" onClick={() => handleNext(state.page)} />
            </nav>
        </div>
    );
};

Pagination.propTypes = {
    page: PropTypes.string,
    pages: PropTypes.string
};

export default Pagination;
