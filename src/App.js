import React, { createContext } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import TodoList from './router/TodoList';
import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function App() {
  const isBlue = true;
  return (
    <div className={cx('box', {blue: isBlue})}>
      d
      <div className={cx('box-inside')} />
    </div>
    /*
    <HashRouter>
      <Route path='/' exact={true} component={TodoList} />
    </HashRouter>
    */
  );
}

export default App;
