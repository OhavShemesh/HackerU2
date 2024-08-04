import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import RecipeReviewCard from './cards/components/CardComponent1';
import CardComponent from './cards/components/card/CardComponent';
import Cards from './cards/components/Cards';
import NumberComponent from './HW/28.7/NumberComponent';
import UsernameComponent from './HW/28.7/UsernameComponent';
import MoreThenHandred from './HW/28.7/MoreThenHandred';
import EventComponent from './events/EventComponesnt';
import EventComponent2 from './events/EventComponent2';
import MyUseStateComponent from './sandbox/MyUseStateComponent';
import CounterComponent from './sandbox/CounterComponent';
import PrintComponent from './HW/30.7/PrintComponent';
import Todolist from './sandbox/Todolist';
import MyFormExample from './sandbox/MyFormExample';
import PageHeader from './Components/pages/PageHeader';
import CardsPage from './Components/pages/CardsPage';
import AboutPage from './Pages/AboutPage';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
/*   let user = { firstName: "Ohav", lastName: "Shemesh" }
  let People = [
    { firstName: "David", lastName: "Baruch", _id: "518" },
    { firstName: "Alice", lastName: "Johnson", _id: "45" },
    { firstName: "Bob", lastName: "Smith", _id: "78" },
    { firstName: "Charlie", lastName: "Brown", _id: "99" },
    { firstName: "Eve", lastName: "Davis", _id: "142" },
    { firstName: "Frank", lastName: "Miller", _id: "205" }
  ];
 */  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

