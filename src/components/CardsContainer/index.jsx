import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/AppContext';
import CardModal from '../CardModal';

const filterBy = (chars, option) => {
    return chars.filter((item) => {
        return ['status', 'gender', 'species'].every((key) => {
            const optionValue = option[key].toLowerCase();
            const itemValue = item[key].toLowerCase();
            const shouldInclude = optionValue === '' || optionValue === key;
            return shouldInclude ? true : itemValue === optionValue;
        });
    });
};

const CardsContainer = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="grid gap-4 p-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center overflow-y-auto">
            {filterBy(state.chars, state.option).map((item) => (
                <CardModal key={item.id} item={item} />
            ))}
        </div>
    );
};

CardsContainer.propTypes = {
    items: PropTypes.array
};

export default CardsContainer;
