import { useContext, useRef } from 'react';
import ButtonIcon from '../UI/ButtonIcon';
import { SET_NAME } from '../../utils/reducer';
import { AppContext } from '../../context/AppContext';

const InputSearch = () => {
    const { dispatch } = useContext(AppContext);
    const inputRef = useRef();
    const handleSearch = () => {
        if (inputRef.current.value) {
            dispatch({ type: SET_NAME, payload: inputRef.current.value });
            inputRef.current.value = '';
        }
    };

    return (
        <div className="flex items-center p-3">
            <input
                ref={inputRef}
                name="name"
                type="text"
                required
                placeholder="Name"
                className="w-full px-3.5 py-1.5 text-white border-b border-gray-200 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ButtonIcon icon="search" onClick={handleSearch} />
        </div>
    );
};

export default InputSearch;
