import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { AppContext, classNames } from '../utils';
import { SET_OPTION } from '../utils/reducer';

const SelectOption = ({ options }) => {
    const { state, dispatch } = useContext(AppContext);
    const handleChange = (value) => {
        dispatch({
            type: SET_OPTION,
            payload: { ...state.option, [options[0].toLowerCase()]: value }
        });
    };

    return (
        <Listbox value={state.option[options[0].toLowerCase()]} onChange={handleChange}>
            {({ open }) => (
                <div className="relative w-full my-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <span className="ml-3 block truncate text-white">
                            {state.option[options[0].toLowerCase()]}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="cursor-pointer absolute z-10 mt-1 max-h-56  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((option) => (
                                <Listbox.Option key={option} value={option}>
                                    {({ selected }) => (
                                        <div className="flex items-center hover:bg-gray-300">
                                            <span
                                                className={classNames(
                                                    selected ? 'font-semibold' : 'font-normal',
                                                    'ml-3 block truncate'
                                                )}
                                            >
                                                {option}
                                            </span>
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    );
};

SelectOption.propTypes = {
    options: PropTypes.array
};

export default SelectOption;
