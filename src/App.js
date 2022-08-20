import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.scss'
import './override.css'
import 'aos/dist/aos.css'
import {ModalContextProvider} from "./contexts/ModalContext";
import {ScrollToTop} from "./components/scrollToTop/ScrollToTop";
import {FilterContextProvider} from "./contexts/FilterContext";


export const App = () => {

    return (
        <BrowserRouter>
            <ModalContextProvider>
                <FilterContextProvider>
                    <ScrollToTop/>
                    <AppRouter/>
                </FilterContextProvider>
            </ModalContextProvider>
        </BrowserRouter>
    );
}


