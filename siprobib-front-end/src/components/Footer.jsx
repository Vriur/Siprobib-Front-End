import { render } from '@testing-library/react';
import React from 'react';

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const nav = css({
    color: 'hotpink'
});

class Footer extends React.Component{
    render(){
        return (
          <footer css={nav}>
            Footer
          </footer>
        );
    }
}

export default Footer;