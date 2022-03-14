import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.scss'
import './override.css'


export const App = () =>  {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  );
}


