import React from 'react';
import 'rxjs';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoute from '../routes/AppRoute';
import Init from '../components/Init';

const App = () => (
    <div>
        <Init />
        <AppRoute />
    </div>
)

export default App;