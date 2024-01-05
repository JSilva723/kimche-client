import { useState  } from 'react'
import PropTypes from 'prop-types'
import Card from './Card';

const CardModal = ({ item }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setOpen(true)}>
                <Card name={item.name} imgUrl={item.imgUrl} />
            </div>
            {open 
                ? <div className="relative z-50">
                    <div className="fixed inset-0 bg-black/10" aria-hidden="true"/>
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col gap-2 bg-black/10 px-4 pb-4 rounded-lg">
                                <h1 className="text-lg text-black mt-2 pr-48">This is my modal title</h1>
                                <button onClick={() => setOpen(!open)} className="flex-1 py-2 px-4 bg-gray-500 text-black">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

CardModal.propTypes = {
    item: PropTypes.object,
}

export default CardModal