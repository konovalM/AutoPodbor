import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.scss'
import cn from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {OPEN_MODAL, useModalContext} from "../../../contexts/ModalContext";


const NavItem = ({text,link='#',isAnchor=false,...props}) => {
    return (
        <li className={styles.item} {...props}>
            {
                isAnchor?
                    <AnchorLink href={`#${link}`}>{text}</AnchorLink>
                    :
                    <Link to={link}>{text}</Link>
            }

        </li>
    )
}




const NavList = () => {
    const {dispatch} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem text={"цены и Услуги"} link={'services'} isAnchor={true}/>
            <NavItem text={"О компании"} link={'/about'}/>
            <NavItem text={"подобранные авто"} link={'examples'} isAnchor={true}/>
            <NavItem text={"блог"} link={'/blog'}/>
            <NavItem text={"Контакты"} onClick={()=>dispatch({type:OPEN_MODAL})}/>
        </ul>
    )
}


export const Navigation = ({className}) => {
    return (
        <nav className={cn(styles.navigation, className)}>
            <NavList/>
        </nav>
    );
};


export const NavigationMobile = () => {
    const {dispatch} = useModalContext()
    return (
        <ul className={styles.list}>
            <NavItem text={"Услуги"}  link={'services'} isAnchor={true}/>
            <NavItem text={"О компании"} link={'/about'}/>
            <NavItem text={"подобранные авто"} link={'examples'} isAnchor={true}/>
            <NavItem text={"блог"} link={"/blog"}/>
            <NavItem text={"Контакты"} onClick={()=>dispatch({type:OPEN_MODAL})}/>
        </ul>
    )
}

