import React from 'react'
import Card, {CardVariant} from "./components/Card"
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UserPage from './components/UserPage';
import TodosPage from "./components/TodosPage";
import UserItemPage from './components/UserItemPage';
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
        <div>
            <EventsExample/>
            <Card variant={CardVariant.primary} width='200px' height='200px'>
                <button>кнопка</button>
            </Card>

            <div>
                <NavLink to='/users'>Пользователи</NavLink>
                <NavLink to='/todos'>Списко дел</NavLink>
            </div>

            <Route path={'/users'} exact>
                <UserPage/>
            </Route>
            <Route path={'/todos'} exact>
                <TodosPage/>
            </Route>
            <Route path={'/users/:id'} exact>
                <UserItemPage/>
            </Route>
            <Route path={'/todos/:id'} exact>
                <TodoItemPage/>
            </Route>
        </div>
        </BrowserRouter>
    );
};

export default App;