import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar';

const Layout = () => {
  return (
    <Box mt={6}>
      <AppBar />

      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
