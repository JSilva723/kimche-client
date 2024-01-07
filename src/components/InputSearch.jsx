import { useContext, useState } from 'react';
import { AppContext } from '../utils';
import ButtonIcon from './ui/ButtonIcon';
import { SET_NAME } from '../utils/reducer';

export const InputSearch = () => {
    const { state, dispatch } = useContext(AppContext);
    const [text, setText] = useState(state.name);
    const handleChange = (event) => {
        if (!event.target.value) dispatch({ type: SET_NAME, payload: '' });
        setText(event.target.value);
    };
    const handleSearch = () => {
        if (text && state.name) {
            dispatch({ type: SET_NAME, payload: '' });
            setText('');
            return;
        }
        dispatch({ type: SET_NAME, payload: text });
    };

    return (
        <div className="flex items-center p-3">
            <input
                name="name"
                type="text"
                required
                placeholder="Name"
                value={text}
                onChange={handleChange}
                className="w-full px-3.5 py-1.5 text-white border-b border-gray-200 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ButtonIcon icon={text && state.name ? 'back' : 'search'} onClick={handleSearch} />
        </div>
    );
};
