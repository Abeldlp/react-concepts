import './App.css'
import { useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import { UserContext, UserContextInterface } from './utils/UserContext'

function App() {
    const [val, setVal] = useState<string>('Default global')
    const [num, setNum] = useState<number>(0)

    const providerValue: UserContextInterface = {
        stringChanger: [val, setVal],
        numChanger: [num, setNum],
    }

    return (
        <div className="App">
            <h1>Home page</h1>
            <div>
                <UserContext.Provider value={providerValue}>
                    <Child1 />
                    <Child2 />
                </UserContext.Provider>
            </div>
        </div>
    )
}

export default App
