import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    height: 334px;
    padding: 40px 195px;
    background: #3B3B3B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MarketplaceGrid = styled(Grid)`
    width: 327px;
`;

export const MarketplaceGridText = styled(Grid)`
    width: 238px;
    margin-top: 30px;
    height: 129px;
    gap: 12px;
`;

export const Text = styled(Typography)`
    font-weight: 400;
    font-size: 16px;
    color: #CCCCCC;
`;

export const MonoText = styled(Typography)`
    font-family: "Space Mono", monospace;
    font-weight: 700;
    font-size: 22px;    
    color: #fff;
`;

export const ExploreGrid = styled(Grid)`
    width: 240px;
    height: 166px;
    gap: 25px;
`;

export const ExploreGridText = styled(Grid)`
    gap: 20px;
    width: 133px;
    height: 106px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    color: #CCCCCC;
`;

export const JoinOur = styled(Grid)`
    gap: 20px;
    width: 420px;
    height: 124px;
`;

export const JoinOurBoxInput = styled.input`
    all: unset;
    width: 180px;
    height: 60px;
    border-radius: 20px;
    background: #fff;
    padding: 0px 20px;
`;

export const JoinOurBoxButton = styled(Button)`
    display: flex;
    background: #A259FF;
    border-radius: 20px;
    gap: 12px;
    width: 200px;
    height: 60px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    text-transform: unset;
    border: unset;
    &:hover{
        border: unset;
        background: #8944e0;
    }
`;

export const JoinOurBoxIB = styled(Grid)`
    background: #fff;
    border-radius: 20px;
`;

export const BottomGrid = styled(Grid)`
    height: 33px;
    border-top: 1px solid #858584;
    align-items: flex-end;
`;

export const BottomGridText = styled(Typography)`
    font-weight: 400;
    font-size: 12px;
    color: #CCCCCC;
`;