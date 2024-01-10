import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import CardDetail from '../CardDetail';

const CardModal = ({ item }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Card name={item.name} imgUrl={item.image} onClick={() => setOpen(true)} />
            {open ? <CardDetail item={item} setOpen={setOpen} /> : null}
        </>
    );
};

CardModal.propTypes = {
    item: PropTypes.object
};

export default CardModal;
