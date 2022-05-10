import React, {useState, useEffect, Fragment} from 'react';

export const AnimateWrapper = ({animate, children}) => {
    function useWindowSize() {
        const [size, setSize] = useState(window.innerWidth)
        useEffect(() => {
            const handleResize = () => {
                setSize(window.innerWidth)
            }
            window.addEventListener('resize', handleResize)
        }, [])
        return size
    }

    const sizeWidth = useWindowSize();
    return (
        <Fragment>
            {sizeWidth >= 576
                ?
                <div data-aos={animate} >
                    {children}
                </div>
                :
                <Fragment>
                    {children}
                </Fragment>
            }
        </Fragment>
    );
};

