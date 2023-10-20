import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const boxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const AccountActivity = ({ userData }) => (
  <>
    <Box display="flex" py={2} justifyContent="space-evenly" sx={{ background: '#141C2F', borderRadius: '8px' }}>
      <Box sx={boxStyles}>
        <Typography>Repos</Typography>
        <Typography>{userData.public_repos || 0}</Typography>
      </Box>
      <Box sx={boxStyles}>
        <Typography>Followers</Typography>
        <Typography>{userData.followers || 0}</Typography>
      </Box>
      <Box sx={boxStyles}>
        <Typography>Following</Typography>
        <Typography>{userData.following || 0}</Typography>
      </Box>
    </Box>
  </>
);

AccountActivity.propTypes = {
  userData: PropTypes.shape({
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountActivity;
