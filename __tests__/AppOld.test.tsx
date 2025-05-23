/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AppOld from '../App-old';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<AppOld />);
  });
});
