import { useContext, useEffect } from 'react';
import SelectOption from './SelectOption';
import { AppContext, GENDER_LIST, STATUS_LIST, mgrSpecies } from '../utils';
import { InputSearch } from './InputSearch';
import { RESET, initialOption } from '../utils/reducer';

export const Header = () => {
    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        mgrSpecies(state.chars, state.species);
    });

    return (
        <div>
            <InputSearch />
            <div className="p-3 gap-x-3 md:flex md:items-center md:justify-between">
                <SelectOption options={STATUS_LIST} />
                <SelectOption options={GENDER_LIST} />
                <SelectOption options={state.species} />
                <button
                    onClick={() =>
                        dispatch({
                            type: RESET,
                            payload: { page: 1, name: '', option: initialOption }
                        })
                    }
                    className="py-1 px-2 mx-3 rounded-md ring-2 ring-gray-300 text-white hover:text-black hover:bg-gray-50 focus:outline-none"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};
