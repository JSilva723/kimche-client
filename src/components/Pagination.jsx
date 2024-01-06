import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AppContext } from '../utils'

const Pagination = () => {
    const state = useContext(AppContext)

    return (
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3">
            <div className="flex flex-1 items-center justify-center">
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <div
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Page: {state.page + 1} / {state.data.characters.info.pages + 1}
                    </span>
                    <div
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    page: PropTypes.string,
    pages: PropTypes.string,
}

export default Pagination