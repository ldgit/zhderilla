import { render, fireEvent, waitForElement } from 'react-native-testing-library';
import React from 'react';
import App from '../App';
import Storija from '../src/vendors/storija.json';

describe('The app', () => {
  it('should render vendors correctly', async () => {
    const anotherVendor = copyVendor(Storija, 'Fast Food Rizzo');

    const { getByText } = render(<App vendors={[Storija, anotherVendor]} />);
    const createOrderButton = await waitForElement(() => getByText('Create order'));

    fireEvent.press(createOrderButton);

    await waitForElement(() => getByText('Fast Food Štorija'));
    await waitForElement(() => getByText('Fast Food Rizzo'));
  });

  it('selecting a vendor should display it\'s menu', async () => {
    const { getByText } = render(<App vendors={[Storija]} />);

    fireEvent.press(await waitForElement(() => getByText('Create order')));
    fireEvent.press(await waitForElement(() => getByText('Fast Food Štorija')));

    await waitForElement(() => getByText('Sendvič u tijestu'));
    await waitForElement(() => getByText('16,00'));
    await waitForElement(() => getByText('Salata piletina'));
  });
});

function copyVendor(original, newName) {
  return {
    ...original,
    data: { ...original.data, name: newName },
  };
}
