import PropTypes from 'prop-types';

const UserPropTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.element.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserPropTypes;
