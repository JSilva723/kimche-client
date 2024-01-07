import { useContext, useEffect } from 'react';
import SelectOption from './SelectOption';
import { AppContext, mgrSpecies } from '../utils';
import { InputSearch } from './InputSearch';

export const Header = () => {
    const state = useContext(AppContext);
    useEffect(() => {
        mgrSpecies(state.chars, state.species, state.setSpecies);
    });

    return (
        <div>
            <InputSearch />
            <div className="p-3 gap-x-3 md:flex md:items-center md:justify-between">
                <SelectOption options={['Status', 'Dead', 'Alive', 'Unknown']} />
                <SelectOption options={['Gender', 'Unknown', 'Female', 'Male', 'Genderless']} />
                <SelectOption options={state.species} />
            </div>
        </div>
    );
};
