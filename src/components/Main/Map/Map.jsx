import React from 'react';



export const Maps = () => {

    return (
        <>

            <iframe  style={
                {
                    pointerEvents: "none"
                }
            }
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c1db9ed53326cfdfd929e5b111b16c925dd19910b6bb0ceeda3b6ff9dca9dae&amp;source=constructor"
                width="100%" height="687" frameBorder="0" />

        </>
    );
};

