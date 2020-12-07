import React from 'react';

const HomeCard = ({ itemList, pathName, children }) => {
    return (
        <>
            <ul>
            {itemList.map(item => 
                <li key={item.id}>
                    <a href={`/${pathName}/${item.id}`}>{item.name}</a>
                </li>)
            }
            </ul>
            { children }
        </>
    );
};

export default HomeCard;