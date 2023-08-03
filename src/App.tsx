/** @format */

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';
import HeartButton from './components/HeartButton';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ['New York', 'San Francisco', 'London', 'Paris', 'Budapest'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Incoming Storm Alert <br /> <span>Start Building the Ark</span>
        </Alert>
      )}
      <BsFillCloudLightningRainFill color='#512888' size='45' />
      <HeartButton onClick={() => console.log('clicked')}/>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
      <Button color='dark' onClick={() => setAlertVisibility(true)}>
        Select
      </Button>
    </div>
  );
}

export default App;
