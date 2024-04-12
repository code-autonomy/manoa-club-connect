import PropTypes from 'prop-types';

const ClubsPropTypes = {
  club: PropTypes.shape({
    clubName: PropTypes.string.isRequired,
    clubPicture: PropTypes.element.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClubsPropTypes;
