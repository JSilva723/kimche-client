import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { GET_DIMENSION } from '../../utils/querys';
import ButtonIcon from '../UI/ButtonIcon';

const RowDetail = ({ label, text }) => (
    <p className="text-lg text-white mt-2">
        <span className="text-lg text-indigo-300 font-bold">{label}: </span>
        {text || 'unknown'}
    </p>
);

RowDetail.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string
};

const CardDetail = ({ item, setOpen }) => {
    const { data } = useQuery(GET_DIMENSION, { variables: { name: item.location.name } });

    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-black opacity-70" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="flex flex-col md:flex-row bg-black rounded-lg">
                    <img
                        src={item.image}
                        className="object-cover h-50 overflow-hidden md:rounded-s-lg"
                    />
                    <div className="relative flex flex-col justify-around items-center py-4 px-5">
                        <div className="absolute top-3 right-3">
                            <ButtonIcon icon="close" onClick={() => setOpen(!open)} />
                        </div>
                        <h3 className="text-2xl font-bold mt-5 text-white">{item.name}</h3>
                        <RowDetail label="Status" text={item.status} />
                        <RowDetail label="Gender" text={item.gender} />
                        <RowDetail label="Species" text={item.species} />
                        <RowDetail label="Type" text={item.type} />
                        <RowDetail label="Location" text={item.location.name} />
                        <RowDetail label="Origin" text={item.origin.name} />
                        <RowDetail
                            label="Dimension"
                            text={data && data.locations.results[0].dimension}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

CardDetail.propTypes = {
    item: PropTypes.object,
    setOpen: PropTypes.func
};

export default CardDetail;
