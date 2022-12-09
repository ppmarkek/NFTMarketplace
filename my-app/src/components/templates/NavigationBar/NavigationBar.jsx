import React from "react";
import { Header, Menu, SingIn, StyledImg, StyledLink } from "./style";
import Logo from '../../../assets/Logo/Logo.svg';
import User from '../../../assets/Icon/User.svg';

const NavigationBar = () => {
    return (
        <Header>
            <StyledImg src={Logo} alt=""/>
            <Menu container>
                <StyledLink>Marketplace</StyledLink>
                <StyledLink>Rankings</StyledLink>
                <StyledLink>Connect a wallet</StyledLink>
                <SingIn variant="outlined" container><img src={User} alt=""/>Sing In</SingIn>
            </Menu>
        </Header>
    );
}

export default NavigationBar;