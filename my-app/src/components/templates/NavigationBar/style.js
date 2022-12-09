import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
`;

export const StyledLink = styled(Link)`
    padding: 12px 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    transition: font-size 0.5s;
    &:hover{
        font-size: 15px;
    }
`;

export const Menu = styled(Grid)`
    gap: 10px;
    width: 608px;
    height: 60px;
    align-items: center;
`;

export const SingIn = styled(Button)`
    background: #A259FF;
    height: 60px;
    width: 152px;
    border-radius: 20px;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    gap: 10px;
    .MuiButtonBase-root:hover{
        background-color: #fff;
    }
`;

export const StyledImg = styled.img`
    cursor: pointer;
`;