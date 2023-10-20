import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';
import MediaList from './MediaList';

const MediaAccounts = ({ userData }) => (
  <>
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid item xs={12} md={6}>
        <MediaList icon={<LocationOnIcon />} value={userData.location || 'Not Specified'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MediaList icon={<TwitterIcon />} value={userData.twitter_username || 'Not Specified'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MediaList icon={<InsertLinkIcon />} value={userData.blog || 'Not Specified'} />
      </Grid>
      <Grid item xs={12} md={6}>
        <MediaList icon={<GitHubIcon />} value={userData.html_url || 'Not Specified'} />
      </Grid>
    </Grid>
  </>
);

MediaAccounts.propTypes = {
  userData: PropTypes.shape({
    blog: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    twitter_username: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediaAccounts;
