import React, { Fragment } from 'react';
import AnyComponent from './components/AnyComponent';

const Home = () => {
  return (
    <Fragment>
      <span>{`This is React!. Enjoy`}</span>
      <AnyComponent />
    </Fragment>
  );
};

export default Home;
