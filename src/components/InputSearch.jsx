import { useContext, useState } from 'react'
import { AppContext } from '../utils'
import ButtonIcon from './ui/ButtonIcon'


export const InputSearch = () => {
    const state = useContext(AppContext)
    const [text, setText] = useState(state.name)
    const handleChange = (event) => {
        if(!event.target.value)  state.setName("")
        setText(event.target.value)
    }

    return (
        <div className="flex items-center p-3">
            <input 
                name="name" type="text" required placeholder="Name" value={text} onChange={handleChange}
                className="w-full px-3.5 py-1.5 text-white border-b border-gray-200 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <ButtonIcon type="right" icon={text && state.name ? "back" : "search"}
                onClick={text && state.name ? () => {state.setName("");setText("")} : () => state.setName(text)}
            />
        </div>
    )
}

