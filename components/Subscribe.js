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
import { useToast } from "@chakra-ui/react"
import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class Realistic extends React.Component {
  constructor(props) {
    super(props);
    this.animationInstance = null;
  }

  makeShot = (particleRatio, opts) => {
    this.animationInstance && this.animationInstance({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    });
  }

  fire = () => {
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  handlerFire = () => {
    this.fire();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };


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
    
  };
  
  const toast = useToast()
  return (
      <Box mt='10' width='100%' borderRadius="lg" border="2px" borderColor="gray.200" p={8}>
        <Text fontSize="2xl" fontWeight="semibold">Subscribe to get Posts Delivered Right to Your Inbox!</Text>
        <FormControl id="email" isRequired>
          <form onSubmit={subscribe}>
              <FormLabel as="legend">{'Email Address'}</FormLabel>
              <Input
                variant="filled"
                id="email-input"
                name="email"
                placeholder="you@gmail.com"
                ref={inputEl}
                required
                type="email"
                width='full'
              />
              <Box mt='5' width='full'>
              <Button type="submit"
                onClick={() =>
                toast({
                  title: "Account added.",
                  description: "Your email has been added to the subscription list.",
                  status: "success",
                  duration: 3500,
                  isClosable: true,
                });
                onClick={this.handlerFire};
                }
                >{'✨ Subscribe 💌'}
              </Button>
              </Box>
        </form>
      </FormControl>
    </Box>
  );
}
