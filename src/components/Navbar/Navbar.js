import React from 'react';
import N from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={N.bar}>
            <div className={N.Name}>Name</div>
            <div className={N.Number}>Number</div>
            <div className={N.Email}>Email</div>
            <div className={N.City}>City</div>
        </div>
    );
};

export default Navbar;