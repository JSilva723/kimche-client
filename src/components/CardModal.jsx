import { useState  } from 'react'
import PropTypes from 'prop-types'
import Card from './Card';
import CardDetail from './CardDetail';

const CardModal = ({ item }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setOpen(true)}>
                <Card name={item.name} imgUrl={item.imgUrl} />
            </div>
            {open ? <CardDetail item={item} setOpen={setOpen}/> : null}
        </div>
    )
}

CardModal.propTypes = {
    item: PropTypes.object,
}

export default CardModal