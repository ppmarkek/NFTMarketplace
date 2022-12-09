import { ExploreGrid, ExploreGridText, JoinOur, JoinOurBoxButton, JoinOurBoxIB, JoinOurBoxInput, MarketplaceGrid, MarketplaceGridText, MonoText, StyledFooter, StyledLink, Text, BottomGrid, BottomGridText } from "./style";
import Logo from '../../../assets/Logo/Logo.svg';
import DiscordLogo from '../../../assets/Icon/DiscordLogo.svg';
import YoutubeLogo from '../../../assets/Icon/YoutubeLogo.svg';
import TwitterLogo from '../../../assets/Icon/TwitterLogo.svg';
import InstagramLogo from '../../../assets/Icon/InstagramLogo.svg';
import { Grid } from "@mui/material";
import EnvelopeSimple from '../../../assets/Icon/EnvelopeSimple.svg';

const Footer = () =>{
    return(
        <StyledFooter>
            <Grid container height="191px" gap="31px">
                <MarketplaceGrid>
                    <img src={Logo} alt=""/>
                    <MarketplaceGridText container>
                        <Text>NFT marketplace UI created with Anima for Figma.</Text>
                        <Grid>
                            <Text>Join our community</Text> 
                            <Grid container gap="10px" marginTop="15px">
                                 <StyledLink><img src={DiscordLogo} alt=""/></StyledLink>
                                 <StyledLink><img src={YoutubeLogo} alt=""/></StyledLink>
                                 <StyledLink><img src={TwitterLogo} alt=""/></StyledLink>
                                 <StyledLink><img src={InstagramLogo} alt=""/></StyledLink>
                            </Grid>
                        </Grid>
                    </MarketplaceGridText>
                </MarketplaceGrid>
                <ExploreGrid container>
                    <MonoText>Explore</MonoText>
                    <ExploreGridText container>
                        <StyledLink>Marketplace</StyledLink>
                        <StyledLink>Rankings</StyledLink>
                        <StyledLink>Connect a wallet</StyledLink>
                    </ExploreGridText>
                </ExploreGrid>
                <JoinOur container>
                    <MonoText>Join Our Weekly Digest</MonoText>
                    <Grid container gap="20px">
                        <Text width="330px">Get exclusive promotions & updates straight to your inbox.</Text>
                        <JoinOurBoxIB container>
                            <JoinOurBoxInput placeholder="Enter your email here" type="email" name="email"/>
                            <JoinOurBoxButton variant="outlined">
                                <img src={EnvelopeSimple} alt=""/>
                                Subscribe
                            </JoinOurBoxButton>
                        </JoinOurBoxIB>
                    </Grid>
                </JoinOur>
            </Grid>
            <BottomGrid container>
                <BottomGridText>
                    Ⓒ NFT Market. Use this template freely.
                </BottomGridText>
            </BottomGrid>
        </StyledFooter>
    );
}

export default Footer;