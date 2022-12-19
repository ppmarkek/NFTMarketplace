import { Button, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { TextField } from 'formik-mui';

export const Wrapper = styled(Grid)`
    justify-content: space-between;
    height: 691px;
`;

export const StyledImg = styled.img`
    width: 610px;
`;

export const FormBox = styled(Grid)`
    width: 610px;
    height: 691px;
`;

export const Title = styled(Typography)`
    font-weight: 600;
    font-size: 51px;
    color: #fff;

`;

export const Text = styled(Typography)`
    font-weight: 400;
    font-size: 22px;
    color: #fff;
    width: 460px;
`;

export const StyledTextField = styled(TextField)`
    input{
        all: unset;
        padding: 16px 20px;
        width: 300px;
        height: 15px;
        background: #fff;
        border-radius: 20px;
    }
    fieldset{
        border: unset;
    }
`;

export const StyledButton = styled(Button)`
    text-transform: none;
    width: 330px;
    height: 46px;
    text-align: center;
    color: #fff;
    background: #A259FF;
    border-radius: 20px;
    font-weight: 600;
    font-size: 16px;
    margin-top: 30px;
    cursor: pointer;
`;