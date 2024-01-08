import { useContext } from 'react';
import PropTypes from 'prop-types';
import CardModal from './CardModal';
import { AppContext, filterBy } from '../utils';

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
