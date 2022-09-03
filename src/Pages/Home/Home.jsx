import { Box } from 'components/Box';
import TrendingMoviesList from '../../components/TrendingMoviesList';

const Home = () => {
  return (
    <Box as="main" variant="container" pt={4}>
      <TrendingMoviesList />
    </Box>
  );
};

export default Home;
