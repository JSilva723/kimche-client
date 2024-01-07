import { useContext } from 'react';
import SelectOption from './SelectOption';
import { AppContext, initialOptions } from '../utils';
import { InputSearch } from './InputSearch';

export const Header = () => {
    const state = useContext(AppContext);

    return (
        <div>
            <InputSearch />
            <div className="p-3 gap-x-3 md:flex md:items-center md:justify-between">
                <SelectOption options={['Status', 'Dead', 'Alive', 'Unknown']} />
                <SelectOption options={['Gender', 'Unknown', 'Female', 'Male', 'Genderless']} />
                <div className="mt-2">
                    <button
                        onClick={() => state.setOption(initialOptions)}
                        className="flex-none w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};
