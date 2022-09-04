import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from './Loader';
import Layout from './Layout';

import { GlobalStyle } from './GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MoviesSearch = lazy(() => import('./MoviesSearch'));
const MoviesDetails = lazy(() => import('./MoviesDetails'));
const MovieCast = lazy(() => import('./MoviesDetails/MovieCast'));
const MovieReviews = lazy(() => import('./MoviesDetails/MovieReviews'));

export const App = () => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={`/${ROUTE_HOME_PAGE}`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<MoviesSearch />} />
            <Route path=":movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </Suspense>
  );
};
