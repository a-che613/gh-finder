import { useState } from 'react';
import {
  InputBase, Button, FormControl, Alert, AlertTitle,
} from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setUserData, setLoading }) {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/users/${searchValue}`);
    if (!searchValue) return;
    setLoading(true);
    setUserData(null);
    try {
      const data = await response.json();
      if (data.message) {
        setError(data.message);
        return;
      }
      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <FormControl>
        <InputBase
          value={searchValue}
          placeholder="Search for a github user"
          onChange={(e) => setSearchValue(e.target.value)}
          startAdornment={<SearchIcon sx={{ marginRight: '10px' }} />}
          endAdornment={<Button onClick={handleSearch} sx={{ borderRadius: '8px' }} variant="contained">Search</Button>}
          sx={{
            width: '100%', background: '#1F2A48', padding: '8px', paddingLeft: '15px', borderRadius: '8px', color: '#fff',
          }}
        />
      </FormControl>
      {error && (
        <Alert severity="error">
          <AlertTitle>{error === 'Not Found' ? 'User not found' : 'Error'}</AlertTitle>
          {error === 'Not Found' ? 'We are sorry, we did not find a user with that name.' : error}
        </Alert>
      )}
    </>
  );
}

SearchBar.propTypes = {
  setUserData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SearchBar;
