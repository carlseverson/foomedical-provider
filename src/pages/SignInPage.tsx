import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <SignInForm
      projectId="25d20a04-9784-413f-84b7-6512afc0468d"
      googleClientId="564614151982-gn1vfuvrufs8ceehhovj5fns1lh6b080.apps.googleusercontent.com"
      onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <Text size="lg">Sign in to NHA's Bitchin' Provider App</Text>
    </SignInForm>
  );
}
