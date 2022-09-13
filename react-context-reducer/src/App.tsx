import React from 'react';
import './App.css';
import TodoListApp from './components/TodoListApp';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodoListApp />
    </ChakraProvider>
  );
}

export default App;
