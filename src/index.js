import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './style.css'
const data = [{
    item: 'apple',
    id: 1,
},
{
    item: 'banana',
    id: 2,
},
{
    item: 'orange',
    id: 3,
},
]
const idChecked = (id) =>{
    let checked = []
    const checkedId = checked?.includes(id) ?
    checked?.filter(item => item !== id) :
    [...(checked ?? []), id]
    return checkedId
}
function App() {
    const [state, setState] = useState('')
    function CheckboxHandler(e){
       let newCheckedId = idChecked(e.target.value)
       setState(...[newCheckedId])
    }
    return (
        <div className='App'>
            {data.map(ID => (
                <div>
                <input type="checkbox"
                    key={ID.id}
                    id={ID.item}
                    value={ID.item}
                    onChange={CheckboxHandler}
                />
                <label for={ID.item}/>{ID.item}<label/>
                </div>
            ))}
            <div>selected items:{state}</div>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)