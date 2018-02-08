import React, { Component } from 'react'

const Header = props => {
    const { title, subtitle } = props;

    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{title}</h1>
                {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
            </div>

        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;