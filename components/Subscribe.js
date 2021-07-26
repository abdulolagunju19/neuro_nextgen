import React, { useRef, useState } from 'react';
import {
    Input,
    Stack,
    InputGroup,
    Button,
    Box,
    useColorMode,
    Text,
    Heading,
    InputRightElement,
    InputLeftElement,
    Icon,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from "@chakra-ui/react"
 import { Formik } from 'formik';

export const Subscribe = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to my posts.');
  };

  return (
    <Stack spacing={4} direction="row" align="center">
      <form onSubmit={subscribe}>
          <label htmlFor="email-input">{'Email Address'}</label>
          <Input
            id="email-input"
            name="email"
            placeholder="you@gmail.com"
            ref={inputEl}
            required
            type="email"
          />
          <div>
            {message
              ? message
              : `I'll send out new emails when I have a new blog post or statistics tutorial.`}
          </div>
          <Button type="submit">{'✨ Subscribe 💌'}</Button>
    </form>
  </Stack>
  );
}
