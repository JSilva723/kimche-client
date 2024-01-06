import PropTypes from 'prop-types'

const Card = ({ name, imgUrl }) => (
    <div className="relative min-w-36 min-h-36">
        <img src={imgUrl} className="object-cover h-full w-full overflow-hidden rounded-xl" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black rounded-b-xl">
            <h3 className="text-center text-white">{name}</h3>
        </div>
    </div>
)

Card.propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
}

export default Card