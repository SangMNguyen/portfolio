import React from 'react';

const Pip = ({ active, onClick, title }) => {

    return (
        <div className={`pip ${active ? 'active' : ''}`} onClick={onClick} title={title}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}

export default Pip;