import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MagicMaBg from '../../../assets/Img/MagicMaBg.png';

export const HeroGrid = styled(Grid)`
    height: 735px;
    justify-content: space-between;
    padding: 0px 115px;
    margin-top: 80px;
`;

export const AboutGrid = styled(Grid)`
    height: 544px;
`;

export const Title = styled(Typography)`
    font-weight: 600;
    color: #fff;
`;

export const Text = styled(Typography)`
    color: ${(props) => (props.Grey ? '#858584' : '#fff')};
    font-family: ${(props) => (props.Mono ? '"Space Mono", monospace' : 'Work Sans')};
`;

export const StyledButton = styled(Button)`
    height: 60px;
    padding: 0px 50px;
    width: ${(props) => (props.$width ? props.$width : '')};
    background: ${(props) => (props.background ? props.background : '#A259FF')};
    border-radius: 20px;
    color: ${(props) => (props.$black ? '#000' : '#fff')};
    gap: 12px;
`;

export const CartGrid = styled(Grid)`
    height: 544px;
`;

export const ImgCart = styled.img`
    border-radius: 20px 20px 0px 0px;
    width: 100%;
`;

export const CartAbout = styled(Grid)`
    background: #3B3B3B;
    border-radius: 0px 0px 20px 20px;
    width: 100%;
    height: 109px;
    padding: 0px 20px;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export const CartAvtor = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    transition: font-size 0.5s;
    &:hover{
        font-size: 14px;
    }
`;

export const TrendingGrid = styled(Grid)`
    height: 836px;
    justify-content: center;
    flex-direction: column;
    padding: 0px 115px;
    gap: 60px;
`;

export const TrandingTitle = styled(Grid)`
    justify-content: flex-start;
    flex-direction: column;
`;

export const TrandingCartBox = styled(Grid)`
    height: 525px;
    width: unset;
    justify-content: space-between;
`;

export const TrandingCart = styled(Grid)`
    width: 330px;
    height: 525px;
    gap: 15px;
    flex-direction: column;
`;

export const TrandingImg = styled.img`
    width: ${(props) => (props.$Big ? '330px' : '100px')};
    border-radius: 20px;
`;

export const TrandingAmount = styled(Button)`
    background: #A259FF;
    border-radius: 20px;
    width: 100px;
    justify-content: center;
    align-items: center;
`;

export const TrandingAvtor = styled(Grid)`
    height: 65px;
    gap: 5px;
    flex-direction: column;
    cursor: pointer;
`;

export const TrandingLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    transition: font-size 0.5s;
    &:hover{
        font-size: 14px;
    }
`;

export const TopCreators = styled(Grid)`
    height: 1085px;
    padding: 80px 115px;
    gap: 60px;
`;

export const TopCreatorsTitle = styled(Grid)`
    height: 91px;
    justify-content: space-between;
    align-items: flex-end;
`;

export const TopCreatorsAllBox = styled(Grid)`
    height: 775px;
    gap: 34px;
`;

export const TopCreatorsBox = styled(Grid)`
    height: 238px;
    border-radius: 20px;
    cursor: pointer;
    background: #3B3B3B;
    transition: box-shadow 0.5s;
    &:hover{
        box-shadow: 0px 5px 29px 1px rgba(0,0,0,0.7);
    }
`;

export const TopCreatorsBoxId = styled(Grid)`
    border-radius: 20px;
    width: 30px;
    height: 30px;
    background: #2B2B2B;
    justify-content: center;
    align-items: center;
    color: #858584;
    font-family: "Space Mono", monospace;
    position: relative;
    left: 20px;
    top: 18px;
`;

export const TopCreatorsBoxImg = styled(Grid)`
    justify-content: center;
    padding-bottom: 20px;
`;

export const TopCreatorsBoxText = styled(Grid)`
    height: 58px;
    justify-content: center;
    align-items: center;
`;

export const BrowseCategories = styled(Grid)`
    height: 928px;
    padding: 80px 115px;
`;

export const BrowseCategoriesAllBox = styled(Grid)`
    height: 662px;
    gap: 34px;
`;

export const BrowseCategoriesBox = styled(Grid)`
    height: 316px;
    padding-top: 60px;
`;

export const BrowseCategoriesBoxImg = styled(Grid)`
    background: ${(props) => (props.$background ? `url(${props.$background}) no-repeat`  : '')};
    background-size: 100%;
    height: 240px;
    cursor: pointer;
    &:hover #Blur{
        backdrop-filter: blur(8px);
        display: flex;
        height: 240px;
        justify-content: center;
        align-items: center;
        border-radius: 20px 20px 0px 0px;
        height: 240px; 
    }
`;

export const BrowseCategoriesBoxBlur = styled(Grid)`
    display: none;
`;

export const BrowseCategoriesBoxText = styled(Grid)`
    height: 76px;
    align-items: center;
    padding: 0px 30px;
    background: #3B3B3B;
    border-radius: 0px 0px 20px 20px;
`;

export const DiscoverMore = styled(Grid)`
    height: 780px;
    padding: 80px 115px;
`;

export const DiscoverMoreTitle = styled(Grid)`
    height: 91px;
    justify-content: space-between;
    align-items: flex-end;
`;

export const DiscoverMoreAllBox = styled(Grid)`
    margin-top: 60px;
    height: 469px;
    justify-content: space-between;
    width: unset;
`;

export const DiscoverMoreBox = styled(Grid)`
    height: 469px;
    width: 330px;
    border-radius: 20px 20px 20px 20px;
    cursor: pointer;
    transition: box-shadow 0.5s;
    &:hover{
        box-shadow: 0px 5px 29px 1px rgba(0,0,0,0.7);
    }
`;

export const DiscoverMoreBoxImg = styled(Grid)`
    height: 296px;
    border-radius: 20px 20px 0px 0px;
`;

export const DiscoverMoreBoxAbout = styled(Grid)`
    height: 173px;
    background: #3B3B3B;
    border-radius: 0px 0px 20px 20px;
    padding: 20px 30px;
    width: 330px;
    justify-content: space-between;
    flex-direction: column;
`;

export const MagicMushrooms = styled(Grid)`
    height: 640px;
    background: url(${MagicMaBg}) center no-repeat;
    background-size: 100%;
`;

export const MagicMushroomsBox = styled(Grid)`
    height: 640px;
    background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%);
    padding: 60px 115px;
    align-items: flex-end;
`;

export const MagicMushroomsBoxCreator = styled(Grid)`
    width: 151px;
    cursor: pointer;
    height: 44px;
    color: #fff;
    font-size: 16px;
    background: #3B3B3B;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: font-size 0.5s;
    &:hover{
        font-size: 14px;
    }
`;

export const MagicMushroomsButton = styled(Button)`
    height: 60px;
    padding: 0px 50px;
    width: 198px;
    background: #fff;
    border-radius: 20px;
    color: #000;
    gap: 12px;
    border: unset;
    &:hover{
        background-color: #c0c8d1;
        border: unset;
    }
`;

export const MagicMushroomsBoxTimer = styled(Grid)`
    background: rgba(59, 59, 59, 0.5);
    height: 144px;
    border-radius: 20px;
    padding: 30px;
`;

export const HowItWorks = styled(Grid)`
    height: 738px;
    padding: 80px 115px;
    flex-direction: column;
`;

export const HowItWorksAllBox = styled(Grid)`
    margin-top: 48px;
    height: 439px;
    justify-content: space-between;
`;

export const HowItWorksBox = styled(Grid)`
    height: 439px;
    width: 330px;
    flex-direction: column;
    background: #3B3B3B;
    border-radius: 20px;
    padding-top: 10px;
    cursor: pointer;
    transition: box-shadow 0.5s;
    &:hover{
        box-shadow: 0px 5px 29px 1px rgba(0,0,0,0.7);
    }
`;

export const HowItWorksBoxText = styled(Grid)`
    justify-content: center;
`;

export const JoinOur = styled(Grid)`
    height: 550px;
    padding: 40px 115px;
`;

export const JoinOurBox = styled(Grid)`
    height: 430px;
    background: #3B3B3B;
    border-radius: 20px;
    padding: 0px 60px;
    align-items: center;
    justify-content: space-between;
`;

export const JoinOurImg = styled.img`
    border-radius: 20px;
`;

export const JoinOurBoxText = styled(Grid)`
    width: 425px;
    height: 272px;
    flex-direction: column;
    justify-content: space-between;
`;

export const JoinOurBoxInput = styled.input`
    all: unset;
    width: 185px;
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