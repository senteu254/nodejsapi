import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Narvbar = props => {
           return (
            <nav className = 'narvbar bg-primary'>
              <h1>
                <i class={props.icon}/> 
                {props.tittle}
                  </h1> 
              </nav>
        );

};

Narvbar.defaulProps = {
tittle:'Github Finder',
icon: 'fab fa-github'
};

Narvbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Narvbar