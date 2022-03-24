import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.scss'
import './override.css'
import {ModalContextProvider} from "./contexts/ModalContext";


export const App = () => {
    return (
        <BrowserRouter>
            <ModalContextProvider>
                <AppRouter/>
            </ModalContextProvider>
        </BrowserRouter>
    );
}


