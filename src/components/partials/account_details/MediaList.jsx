import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MediaList = ({ icon, value, href }) => (
  <>
    <Button
      href={href}
      sx={{
        textTransform: 'lowercase', textWrap: 'nowrap', overflow: 'ellipsis',
      }}
      startIcon={icon}
    >
      {value}
    </Button>
  </>
);

MediaList.propTypes = {
  icon: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MediaList;
