import { Box, Typography, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import AccountActivity from './partials/account_details/AccountActivity';
import MediaAccounts from './partials/account_details/MediaAccounts';

function UserInfo({ userData }) {
  const createdAt = new Date(userData.created_at);
  const formattedDate = new Intl.DateTimeFormat('en-us', { dateStyle: 'full' }).format(createdAt);
  return (
    <>
      <Box p={2.5} sx={{ background: '#1F2A48', borderRadius: '8px' }}>
        <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
          <Box display="flex" justifyContent="space-between">
            <Avatar src={userData.avatar_url || ''} sx={{ width: 58, height: 58 }} />
            <Box className="bio" display="flex" alignItems="start" justifyContent="space-between" width="90%">
              <Box>
                <Typography>{userData.name != null ? userData.name : ''}</Typography>
                <Typography>{`@${userData.login || 'No username'}`}</Typography>
              </Box>
              <Box>
                <Typography>{`Joined ${formattedDate}`}</Typography>
              </Box>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent="end">
            <Box className="otherDetails" width="90%" display="flex" flexDirection="column" gap={1.5}>
              <Typography pt={1}>{userData.bio || 'No bio'}</Typography>
              <AccountActivity userData={userData} />
              <MediaAccounts userData={userData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

UserInfo.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    created_at: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default UserInfo;
