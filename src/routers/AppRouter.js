import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';



const ExpenseDashboardPage = () => (
    <div>
        This is form my dashboard component
    </div>
 );

 const AddExpensePage = () => (
     <div>
         This is from my add expense component
     </div>
 );

 const EditExpensePage = () => (
    <div>
        This is from my EDIT expense component
    </div>
);

const NotFound = () => (
    <div>
        404 !!not foudn
    </div>
);
const HelpPage = () => (
    <div>
        This is from my Help Page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expenze</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active"></NavLink>
    </header>
)

const AppRouter = () => (
       <BrowserRouter>
    <div>
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;