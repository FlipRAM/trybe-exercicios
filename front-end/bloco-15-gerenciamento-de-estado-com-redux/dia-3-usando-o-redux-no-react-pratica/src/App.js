import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import store from './Redux/store/store';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ PersonalForm } />
            <Route path="/professionalform" component={ ProfessionalForm } />
            <Route path="/formdisplay" component={ FormDataDisplay } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
