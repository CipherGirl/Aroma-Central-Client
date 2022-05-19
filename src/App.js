import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/Home/About/About';
import ViewItem from './Pages/ViewItem/ViewItem';
import ManageItems from './Pages/ManageItems/ManageItems';
import UserItems from './Pages/UserItems/UserItems';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        emotionOptions={{ key: 'mantine' }}
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="view/:itemId"
              element={
                <RequireAuth>
                  <ViewItem />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="manage"
              element={
                <RequireAuth>
                  <ManageItems />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="user/items"
              element={
                <RequireAuth>
                  <UserItems />
                </RequireAuth>
              }
            ></Route>
          </Routes>
          {/* <div style={{ flexGrow: '1' }}></div> (Use a blank div with flex-grow:1 to fill unused spaced right before the footer) */}
          {/* <!-- Any content below this will always be at bottom. --> */}
          <Footer />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
