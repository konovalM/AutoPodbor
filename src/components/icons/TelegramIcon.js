import React from 'react';

const TelegramIcon = ({width = 36, height = 30, color = '#121212', className}) => {
    return (
        <svg
            className={className}
            width={width} height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M35.8974 2.73111L30.4648 28.1891C30.0549 29.9858 28.9861 30.433 27.4672 29.5865L19.1897 23.5255L15.1956 27.3426C14.7536 27.7818 14.3839 28.1491 13.532 28.1491L14.1267 19.7723L29.4683 5.9972C30.1353 5.40627 29.3236 5.07886 28.4316 5.66979L9.4656 17.5363L1.30059 14.9969C-0.475462 14.4459 -0.507608 13.2321 1.67026 12.3856L33.607 0.159759C35.0857 -0.391245 36.3796 0.487167 35.8974 2.73111Z"
                fill={color}/>
        </svg>
    );
};

export default TelegramIcon;
