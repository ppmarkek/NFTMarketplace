import React from "react";
import { Header, Menu, SingIn, SingInLink, StyledImg, StyledLink } from "./style";
import Logo from '../../../assets/Logo/Logo.svg';
import User from '../../../assets/Icon/User.svg';

const NavigationBar = () => {
    return (
        <Header>
             <SingInLink to="/"><StyledImg src={Logo} alt=""/></SingInLink>
            <Menu container>
                <StyledLink>Marketplace</StyledLink>
                <StyledLink>Rankings</StyledLink>
                <StyledLink>Connect a wallet</StyledLink>
                <SingInLink to="/CreateAccount"><SingIn variant="outlined" container><img src={User} alt=""/>Sing In</SingIn></SingInLink>
            </Menu>
        </Header>
    );
}

export default NavigationBar;