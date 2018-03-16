import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ height }) => <div style={{ height: `${height}vw` }} />;

Spacer.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Spacer;
