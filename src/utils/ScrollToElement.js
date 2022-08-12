import {scroller} from "react-scroll";

export const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 300,
        offset: -70,
    })
}