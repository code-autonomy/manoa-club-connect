import PropTypes from 'prop-types';

const ClubsPropTypes = {
  club: PropTypes.shape({
    clubName: PropTypes.string.isRequired,
    clubPicture: PropTypes.element,
    bio: PropTypes.string.isRequired,
  }),
};

export default ClubsPropTypes;
