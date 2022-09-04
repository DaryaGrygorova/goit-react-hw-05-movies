import { Box } from 'components/Box';
import Loader from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <Box as="main" variant="container" pt={5}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Movies;
