import { render, fireEvent, waitForElement } from 'react-native-testing-library';
import React from 'react';
import App from '../App';
import Storija from '../src/vendors/storija.json';

it('should render vendors correctly', async () => {
  const anotherVendor = copyVendor(Storija, 'Fast Food Rizzo');

  const { getByText } = render(<App vendors={[Storija, anotherVendor]} />);
  const createOrderButton = getByText('Create order');

  fireEvent.press(createOrderButton);

  await waitForElement(() => getByText('Fast Food Štorija'));
  await waitForElement(() => getByText('Fast Food Rizzo'));
});

function copyVendor(original, newName) {
  return {
    ...original,
    data: { ...original.data, name: newName },
  };
}
