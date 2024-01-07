import PropTypes from 'prop-types'
import { MagnifyingGlassIcon,  ChevronLeftIcon, ChevronRightIcon, BackspaceIcon } from "@heroicons/react/20/solid";

/**
 * @typedef {"search"|"chevLeft"|"chefRight"|"back"} iconIcon
 */
const OBJ_ICON = {
    search: <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />,
    chevLeft: <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />,
    chefRight: <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />,
    back: <BackspaceIcon className="h-5 w-5" aria-hidden="true" />
}

/**
 * @typedef {"left"|"right"} iconTypes
 */

/**
 * @typedef {Object} ButtonIcon
 * @property {iconTypes} type
 * @property {iconIcon} icon
 * @property {*} onClick
 */

/**
 * @param {ButtonIcon} props
 */

const ButtonIcon = ({ type, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center rounded-${type[0]}-md ring-1 ring-gray-300 px-2 py-2 text-gray-400 hover:bg-gray-50 focus:outline-none`}
        >
            {OBJ_ICON[icon]}
        </button>
    )
}

ButtonIcon.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default ButtonIcon