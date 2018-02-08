import React, { Component } from 'react';
import Option from './Option'

const Options = props => {
    const { handleDeleteOptions, handleDeleteOption, options } = props;

    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link"
                    disabled={!(options && options.length)}
                    onClick={handleDeleteOptions}>
                    Remove All
                </button>
            </div>
            
            {options.length === 0 && <p className="widget__message">Please add some items to get started!</p>}
            {options.map((o, i) => {
                return <Option
                            count={i+1}
                            key={i} 
                            text={o}
                            handleDeleteOption={(e => handleDeleteOption(o))} />
            }
            )}
        </div>
    )
}

export default Options;