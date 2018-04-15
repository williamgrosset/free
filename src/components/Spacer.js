import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ height }) => <div style={{ height: `${height}px` }} />;

Spacer.propTypes = { height: PropTypes.number.isRequired };

export default Spacer;
