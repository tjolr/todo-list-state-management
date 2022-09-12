import React from "react";
import "./App.css";
import TodoListApp from "./components/TodoListApp";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <TodoListApp />
    </ChakraProvider>
  );
}

export default App;
