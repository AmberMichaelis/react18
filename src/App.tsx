/** @format */

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ['New York', 'San Francisco', 'London', 'Paris', 'Budapest'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // const handleClick = () => console.log('clicked')

  return (
    <div>
     {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Messages Just <br/> <span>In the Span of Time</span></Alert>}
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
      <Button color='danger' onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
