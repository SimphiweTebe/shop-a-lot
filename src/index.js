import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux'
import Store from './redux/Store';
import {BrowserRouter} from 'react-router-dom'
import './sass/global.scss'

ReactDOM.render(
<BrowserRouter>
    <Provider store={Store}>
        <App />
    </Provider> 
</BrowserRouter>, document.getElementById('root'))