import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import { usePagination } from '../hooks/usePagination';

const Pagination = () => {
    const { state, handlePrev, handleNext } = usePagination();

    return (
        <div className="flex items-center justify-center border-t border-gray-200 px-4 py-3">
            <nav className="flex" aria-label="Pagination">
                <button
                    onClick={() => handlePrev(state.page)}
                    className="flex items-center rounded-l-md ring-1 ring-gray-300 px-2 py-2 text-gray-400 hover:bg-gray-50 focus:outline-none"
                >
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <span className="bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                    Page: {state.page} / {state.pages}
                </span>
                <button
                    onClick={() => handleNext(state.page)}
                    className="flex items-center rounded-r-md ring-1 ring-gray-300 px-2 py-2 text-gray-400 hover:bg-gray-50 focus:outline-none"
                >
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </nav>
        </div>
    );
};

Pagination.propTypes = {
    page: PropTypes.string,
    pages: PropTypes.string
};

export default Pagination;
