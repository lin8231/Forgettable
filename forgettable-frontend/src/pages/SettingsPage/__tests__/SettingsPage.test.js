import {Settings} from '@mui/icons-material';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {AuthContext} from '../../../context/AuthContext';
import firebase from 'firebase/compat/app';

it('renders Settings page UI with correct hierarchy', () => {
  const renderer = new ShallowRenderer();

  firebase.auth().onAuthStateChanged(async (u) => {
    if (u) {
      renderer.render(
          <AuthContext>
            <Settings />
          </AuthContext>,
      );

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    }
  });
});
