import React from 'react';

import RMDBLogo from '../../images/reactMovie_logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../../styles/StyledHeader';

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledRMDBLogo src={RMDBLogo} alt="rmbd-logo" />
            <StyledTMDBLogo src={TMDBLogo} alt="tmbd-logo" />
        </div>
    </StyledHeader>
);


export default Header;