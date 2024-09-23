import { Provider } from 'react-redux'

import Input from "./components/Input"
import Output from "./components/Output"
import store from './store'

import './App.css'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Output />
                <Input />
            </div>
        </Provider>
    )
}

export default App
