import React, { useContext } from 'react'
import { UserContext, UserContextInterface } from '../utils/UserContext'

const Child2: React.FC = () => {
    const { stringChanger, numChanger } =
        useContext<UserContextInterface>(UserContext)

    const [val, setVal] = stringChanger
    const [num] = numChanger

    const changeValue = () => {
        setVal('Latest click on Child2')
    }
    return (
        <div>
            <div>
                <p>Child 2: {val}</p>
                <span>{num}</span>
            </div>
            <button onClick={changeValue}>Change value</button>
        </div>
    )
}

export default Child2
