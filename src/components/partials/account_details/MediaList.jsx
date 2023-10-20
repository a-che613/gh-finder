import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MediaList = ({ icon, value }) => (
  <>
    <Button
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
};

export default MediaList;
