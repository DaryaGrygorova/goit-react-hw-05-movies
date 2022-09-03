import { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';

// import Home from '../Pages/Home';
import Layout from './Layout';
// import Movies from '../Pages/Movies/Movies';
// import MoviesSearch from './MoviesSearch';
// import MoviesDetails from './MoviesDetails';

import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MoviesSearch = lazy(() => import('./MoviesSearch'));
const MoviesDetails = lazy(() => import('./MoviesDetails'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

export const App = () => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

  return (
    <>
      <Routes>
        <Route path={`/${ROUTE_HOME_PAGE}`} element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<MoviesSearch />} />
            <Route path=":movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<div>Page not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};
