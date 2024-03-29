import PropTypes from 'prop-types';
import {
    MagnifyingGlassIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon
} from '@heroicons/react/20/solid';

/**
 * @typedef {"search"|"chevLeft"|"chefRight"|"close"} iconIcon
 */
const OBJ_ICON = {
    search: <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />,
    chevLeft: <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />,
    chefRight: <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />,
    close: <XMarkIcon className="h-5 w-5" aria-hidden="true" />
};

/**
 * @typedef {Object} ButtonIcon
 * @property {iconIcon} icon
 * @property {*} onClick
 */

/**
 * @param {ButtonIcon} props
 */

const ButtonIcon = ({ icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center rounded-md ring-1 ring-gray-300 px-2 py-2 text-gray-400 hover:text-black hover:bg-gray-50 focus:outline-none"
        >
            {OBJ_ICON[icon]}
        </button>
    );
};

ButtonIcon.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default ButtonIcon;
