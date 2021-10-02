import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import { Heading, Container, Text } from '@chakra-ui/react';

const HomePage = () => (
  <Container padding={"7"} >
    <Heading paddingY={"5"}>
      Welcome to Our App
    </Heading>
    <Text fontSize="2xl"> 
      Animal AID allows people to help 
      endangered animals around the world
      and in general just help animals
    </Text>
  </Container>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
