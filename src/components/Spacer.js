import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ height }) => <div style={{ height: `${height}vh` }} />;

Spacer.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Spacer;
