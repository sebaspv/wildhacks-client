import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import { Heading } from '@chakra-ui/react';

const HomePage = () => (
  <Heading>Hola</Heading>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
