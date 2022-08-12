import {scroller} from "react-scroll";

export const scrollToElement = (element, offset = -50) => {
    scroller.scrollTo(element, {
        duration: 800,
        delay: 0,
        smooth: 'ease',
        offset: offset,
    })
}