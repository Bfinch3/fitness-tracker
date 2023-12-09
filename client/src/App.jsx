import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import NavigationBar from './components/NavigationBar';
import UserPage from './pages/UserPage'; 

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function updateTheme(theme) {
  localStorage.setItem("theme", theme);

  const rootElement = document.getElementById('root');
  rootElement.dataset.bsTheme = theme;
  rootElement.classList.remove("bg-light", "bg-dark");
  rootElement.classList.add(`bg-${theme}`);
  setTimeout(() => {rootElement.style.transition = "background-color 0.5s cubic-bezier(0.25, 1, 0.5, 1)";}, 100); // Don't apply tranisition immediatley
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  updateTheme(theme); // Set theme as soon as app starts initializing
  useEffect(() => { updateTheme(theme) }, [theme]);

  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'></div>
      <NavigationBar theme={theme} setTheme={setTheme}/>
      <div id="main-div" className='container'>
      {/* <Routes>
              <Route path="/userpage" element={<UserPage />} />
      </Routes> */}
      <Outlet />

      </div>
    </ApolloProvider>
  );
}

export default App;
