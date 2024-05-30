import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'

import "../../styles/button.css"


function Button({children, onClick, className, disabled, active, clean, ...restProps}){
    
    function onClikAction(e){
        if (disabled){
            e.preventDefault();
        } else {
            return onClick(e);
        }
    }
    
    const classes = clean ? classNames(
            className,
            { active }) : classNames(
                'btn',
                className,
                { active },
            )


    const Tag = restProps.href ? 'a' : 'button';

    return(
        <Tag
            {...restProps}
            className={classes}
            disabled={disabled}
            onClick={onClikAction}
            >{children}</Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    clean: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
    clean: false,
}
export {Button}