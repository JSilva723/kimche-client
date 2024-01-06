import PropTypes from 'prop-types'

const RowDetail = ({label, text}) => (
    <p className="text-lg text-white mt-2">
        <span className="text-lg text-indigo-300 font-bold">{label}: </span>{text || "unknown"}
    </p>
)

RowDetail.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
}

const CardDetail = ({ item, setOpen }) => (
    <div className="relative z-50">
        <div className="fixed inset-0 bg-black opacity-70" aria-hidden="true"/>
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative flex bg-black rounded-lg w-1/3">
                <img src={item.image} className="object-cover h-50 w-1/2 overflow-hidden rounded-s-lg" />
                <button     
                    onClick={() => setOpen(!open)} 
                    className="absolute top-3 right-3 bg-white border border-whiite-200 text-black rounded-full w-8 h-8"
                >
                    x
                </button>
                <div className="flex flex-col justify-around items-center w-1/2 pe-2 pb-2">
                    <h3 className="text-2xl font-bold mt-5 text-white">{item.name}</h3>
                    <RowDetail label="Status" text={item.status}/>
                    <RowDetail label="Gender" text={item.gender}/>
                    <RowDetail label="Species" text={item.species}/>
                    <RowDetail label="Type" text={item.type}/>
                    <RowDetail label="Location" text={item.location.name}/>
                    <RowDetail label="Origin" text={item.origin.name}/>
                    <RowDetail label="Dimension" text={item.location.id}/>
                </div>
            </div>
        </div>
    </div>
)

CardDetail.propTypes = {
    item: PropTypes.object,
    setOpen: PropTypes.func,
}

export default CardDetail