import React from 'react';
import Links from '../Links';

const ProductPageHeader = () => {
    const links = [
        {
            label: 'REACT',
            ref: '#react',
        },
        {
            label: 'CHROME EXTENSIONS',
            ref: '#chrome',
        },
        {
            label: 'AR',
            ref: '#ar',
        },
        {
            label: 'iOS',
            ref: '#ios',
        },
        {
            label: 'PYTHON',
            ref: '#python',
        },
    ];

    return (
        <>
            <Links data={links} />
        </>
    );
};

export default ProductPageHeader;
