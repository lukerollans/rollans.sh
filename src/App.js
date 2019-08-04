import React from 'react';
import Sidebar from './components/sidebar';
import MeatAndPotatoes from './components/meat-and-potatoes';
import OpenSourceExample from './components/open-source-example';

const App = props => {
  return (
    <div className="site-wrapper">
      <Sidebar />
      <MeatAndPotatoes />
    </div>
  );
};

export default App;
