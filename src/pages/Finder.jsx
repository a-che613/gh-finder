import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import UserInfo from '../components/UserInfo';

function Finder() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Box className="finder" display="flex" flexDirection="column" gap={2} sx={{ width: ({ sm, md }) => ({ sm: '100%', md: '50%' }[sm || md]), color: 'white' }}>
        <NavBar />
        <SearchBar setUserData={(res) => setUserData(res)} setLoading={setLoading} />
        {loading
          ? (
            <Box
              sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px',
              }}
            >
              <CircularProgress />
            </Box>
          )
          : (userData && <UserInfo userData={userData} />)}
      </Box>
    </>
  );
}

export default Finder;
