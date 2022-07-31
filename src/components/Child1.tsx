import React, { useContext } from 'react'
import { UserContext, UserContextInterface } from '../utils/UserContext'

const Child1: React.FC = () => {
    const { stringChanger, numChanger } =
        useContext<UserContextInterface>(UserContext)

    const [val, setVal] = stringChanger
    const [num, setNum] = numChanger

    const changeValue = () => {
        setVal('Latest click on Child1')
    }

    const incrementNumber = () => {
        setNum(num + 1)
    }
    return (
        <div>
            <div>
                <p>Child 1: {val}</p>
                <span>{num}</span>
            </div>
            <div style={{ display: 'flex' }}>
                <button onClick={changeValue}>Change value</button>
                <button onClick={incrementNumber}>Increment number</button>
            </div>
        </div>
    )
}

export default Child1
