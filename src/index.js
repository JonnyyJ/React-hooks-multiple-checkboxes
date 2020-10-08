import React from 'react'
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
const idChecked = (checked = [], id) =>{
    const checkedId = checked?.includes(id) ?
    checked?.filter(item => item !== id) :
    [...App(checked ?? []), id]
    return checkedId
}
function App() {
    return (
        <div className='App'>
            {data.map(i => (
                <div>
                <input type="checkbox"
                    key={i.id}
                    id={i.item}
                />
                <label for={i.item}/>
                </div>
            ))}
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)