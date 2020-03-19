import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledNavigation } from '../../styles/StyledNavigation';

const Navigation = ({ link }) => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to="/"><p>Home</p></Link>
            <p>|</p>
            <p>{link}</p>
        </div>
    </StyledNavigation>
);

Navigation.propTypes = {
    link: PropTypes.string,
}

export default Navigation;