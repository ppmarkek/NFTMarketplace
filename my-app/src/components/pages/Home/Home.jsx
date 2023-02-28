import { Grid } from "@mui/material";
import { AboutGrid, HeroGrid, StyledButton, Text, Title, CartGrid, ImgCart, CartAbout, TrendingGrid, TrandingTitle, TrandingCartBox, TrandingCart, TrandingImg, TrandingAmount, TrandingAvtor, CartAvtor, TrandingLink, TopCreators, TopCreatorsTitle, TopCreatorsAllBox, TopCreatorsBox, TopCreatorsBoxId, TopCreatorsBoxImg, TopCreatorsBoxText, BrowseCategories, BrowseCategoriesAllBox, BrowseCategoriesBox, BrowseCategoriesBoxImg, BrowseCategoriesBoxBlur, BrowseCategoriesBoxText, DiscoverMore, DiscoverMoreTitle, DiscoverMoreAllBox, DiscoverMoreBox, DiscoverMoreBoxImg, DiscoverMoreBoxAbout, MagicMushrooms, MagicMushroomsBox, MagicMushroomsBoxCreator, MagicMushroomsButton, MagicMushroomsBoxTimer, HowItWorks, HowItWorksAllBox, HowItWorksBox, HowItWorksBoxText, JoinOur, JoinOurBox, JoinOurImg, JoinOurBoxText, JoinOurBoxInput, JoinOurBoxButton, JoinOurBoxIB } from "./style";
import NFTCart from '../../../assets/Img/ImagePlaceholder.svg';
import avatarCart from '../../../assets/Avatar/Avatar.svg';
import { Tranding, TopCreatorsData, BrowseCategoriesData, DiscoverMoreData, HowItWorksData } from "./Data";
import Rocket from '../../../assets/Icon/RocketLaunch.svg';
import Eye from '../../../assets/Icon/Eye.svg';
import Shroomie from '../../../assets/Avatar/Shroomie.svg';
import Austrobaut from '../../../assets/Img/austrobaut.svg';
import EnvelopeSimple from '../../../assets/Icon/EnvelopeSimple.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    const Timer = () => {
        let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        setInterval(function() {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("Hours").innerHTML = hours;
            document.getElementById("Minutes").innerHTML = minutes;
            document.getElementById("Seconds").innerHTML = seconds;
        }, 1000);
    }
    
    useEffect(() => {
        Timer();
        AOS.init();
    });
    return(
        <Grid>
            <HeroGrid container>
                <AboutGrid item xs={5} data-aos="fade-right">
                    <Title fontSize="67px">Discover digital art & Collect NFTs</Title>
                    <Text fontSize="22px">NFT marketplace UI created with Anima for Figma. 
                    Collect, buy and sell art from more than 20k NFT artists.</Text>
                    <Grid container height="120px" alignItems="center">
                        <StyledButton variant="outlined">Get Started</StyledButton>
                    </Grid>
                    <Grid container>
                        <Grid xs={4}>
                            <Text Mono fontSize="28px">240k+</Text>
                            <Text fontSize="24px">Total Sale</Text>
                        </Grid>
                        <Grid xs={4}>
                            <Text Mono fontSize="28px">100k+</Text>
                            <Text fontSize="24px">Auctions</Text>
                        </Grid>
                        <Grid xs={4}>
                            <Text Mono fontSize="28px">240k+</Text>
                            <Text fontSize="24px">Artists</Text>
                        </Grid>
                    </Grid>
                </AboutGrid>
                <CartGrid container item xs={5} flexDirection="column" data-aos="fade-left">
                    <ImgCart src={NFTCart} alt="" />
                    <CartAbout container>
                        <Title fontSize="22px">Space Walking</Title>
                        <CartAvtor container gap="12px">
                            <img src={avatarCart} alt=""/>
                            Animakid
                        </CartAvtor>
                    </CartAbout>
                </CartGrid>
            </HeroGrid>

            <TrendingGrid container>
                <TrandingTitle container data-aos="fade-right">
                    <Title fontSize="38px">Trending Collection</Title>
                    <Text fontSize="22px">Checkout our weekly updated trending collection.</Text>
                </TrandingTitle>
                <TrandingCartBox container data-aos="fade-up">
                    {Tranding.map((item) => (
                    <TrandingCart key={item.Title} container>
                        <TrandingImg src={item.Img1} alt="" $Big/>
                        <Grid container gap="15px">
                            <TrandingImg src={item.Img2} alt=""/>
                            <TrandingImg src={item.Img3} alt=""/>
                            <TrandingAmount variant="outlined" container>
                                <Text Mono fontSize="22px">{item.Amount}</Text>
                            </TrandingAmount>
                        </Grid>
                        <TrandingAvtor container>
                            <Title fontSize="22px">{item.Title}</Title>
                            <TrandingLink>
                                <img src={item.Avatar} alt=""/>
                                {item.Avtor}
                            </TrandingLink>
                        </TrandingAvtor>
                    </TrandingCart>
                    ))}
                </TrandingCartBox>
            </TrendingGrid>

            <TopCreators container>
                <TopCreatorsTitle container>
                    <Grid container width="600px" flexDirection="column" data-aos="fade-right">
                        <Title fontSize="38px">Top creators</Title>
                        <Text fontSize="22px">Checkout Top Rated Creators on the NFT Marketplace</Text>
                    </Grid>
                    <StyledButton data-aos="fade-left" variant="outlined" background><img src={Rocket} alt=""/>View Rankings</StyledButton>
                </TopCreatorsTitle>
                <TopCreatorsAllBox container data-aos="fade-up">
                    {TopCreatorsData.map((item) =>(
                        <TopCreatorsBox key={item.id} xs={2.745}>
                            <TopCreatorsBoxId container>{item.id}</TopCreatorsBoxId>
                            <TopCreatorsBoxImg container>
                                <img src={item.Avatar} alt=""/>
                            </TopCreatorsBoxImg>
                            <TopCreatorsBoxText container>
                                <Title fontSize="22px">{item.Avtor}</Title>
                                <Grid container gap="10px" justifyContent="center">
                                    <Text fontSize="16px" Grey>Total Sales:</Text>
                                    <Text fontSize="16px" Mono>{item.Price}</Text>
                                </Grid>
                            </TopCreatorsBoxText>
                        </TopCreatorsBox>
                    ))}
                </TopCreatorsAllBox>
            </TopCreators>

            <BrowseCategories>
                <Title fontSize="38px" data-aos="fade-right">Browse Categories</Title>
                <BrowseCategoriesAllBox container data-aos="fade-up">
                    {BrowseCategoriesData.map((item) => (
                        <BrowseCategoriesBox xs={2.745} key={item.Background}>
                            <BrowseCategoriesBoxImg xs={12} $background={item.Background}>
                                <BrowseCategoriesBoxBlur id="Blur" container>
                                    <img src={item.Icon} alt=""/>
                                </BrowseCategoriesBoxBlur>
                            </BrowseCategoriesBoxImg>
                            <BrowseCategoriesBoxText container>
                                <Title>{item.Text}</Title>
                            </BrowseCategoriesBoxText>
                        </BrowseCategoriesBox>
                    ))}
                </BrowseCategoriesAllBox>
            </BrowseCategories>

            <DiscoverMore>
                <DiscoverMoreTitle container>
                    <Grid container width="470px" flexDirection="column" data-aos="fade-right">
                        <Title fontSize="38px">Discover More NFTs</Title>
                        <Text fontSize="22px">Explore new trending NFTs</Text>
                    </Grid>
                    <StyledButton data-aos="fade-left" variant="outlined" background><img src={Eye} alt=""/>See All</StyledButton>
                </DiscoverMoreTitle>
                <DiscoverMoreAllBox container data-aos="fade-up">
                    {DiscoverMoreData.map((item) => (
                        <DiscoverMoreBox key={item.Creator}>
                            <DiscoverMoreBoxImg>
                                <img src={item.Img} alt=""/>
                            </DiscoverMoreBoxImg>
                            <DiscoverMoreBoxAbout container>
                                <Grid container flexDirection="column" gap="5px">
                                    <Title fontSize="22px">{item.Title}</Title>
                                    <Grid container gap="12px">
                                        <img src={item.Avatar} alt=""/>
                                        <Text fontSize="16px">{item.Creator}</Text>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="space-between" height="43px">
                                    <Grid container xs={6} flexDirection="column">
                                        <Text Mono Grey fontSize="12px">Price</Text>
                                        <Text Mono fontSize="16px">{item.Price}</Text>
                                    </Grid>
                                    <Grid container xs={6} flexDirection="column" alignItems="flex-end">
                                        <Text Mono Grey fontSize="12px">Highest Bid</Text>
                                        <Text Mono fontSize="16px">{item.HighestBid}</Text>
                                    </Grid>
                                </Grid>
                            </DiscoverMoreBoxAbout>
                        </DiscoverMoreBox>
                    ))}
                </DiscoverMoreAllBox>
            </DiscoverMore>

            <MagicMushrooms container>
                <MagicMushroomsBox container>
                    <Grid container xs={9} height="220px" flexDirection="column" justifyContent="space-between" data-aos="fade-right">
                        <MagicMushroomsBoxCreator container>
                            <img src={Shroomie} alt=""/>
                            <Grid width="75px">Shroomie</Grid>
                        </MagicMushroomsBoxCreator>
                        <Title fontSize="51px">Magic Mashrooms</Title>
                        <MagicMushroomsButton $width="198px" $black variant="outlined" background="#fff">
                            <img src={Eye} alt=""/>
                            See All
                        </MagicMushroomsButton>
                    </Grid>
                    <Grid container xs={3} height="220px" flexDirection="column" justifyContent="flex-end" data-aos="fade-left">
                        <MagicMushroomsBoxTimer>
                            <Text fontSize="12px" Mono>Auction ends in:</Text>
                            <Grid container justifyContent="space-between">
                                <Grid>
                                    <Title id="Hours" fontSize="38px"></Title>
                                    <Text fontSize="12px" Mono>Hours</Text>
                                </Grid>
                                <Title fontSize="36px">:</Title>
                                <Grid>
                                    <Title id="Minutes" fontSize="38px"></Title>
                                    <Text fontSize="12px" Mono>Minutes</Text>
                                </Grid>
                                <Title fontSize="36px">:</Title>
                                <Grid>
                                    <Title id="Seconds" fontSize="38px"></Title>
                                    <Text fontSize="12px" Mono>Seconds</Text>
                                </Grid>
                            </Grid>
                        </MagicMushroomsBoxTimer>
                    </Grid>
                </MagicMushroomsBox>
            </MagicMushrooms>

            <HowItWorks container>
                <Grid data-aos="fade-right">
                    <Title fontSize="38px">How it works</Title>
                    <Text fontSize="22px">Find out how to get started</Text>
                </Grid>
                <HowItWorksAllBox container data-aos="fade-up">
                    {HowItWorksData.map((item) => (
                        <HowItWorksBox container key={item.Icon}>
                            <img src={item.Icon} alt=""/>
                            <HowItWorksBoxText container>
                                <Title fontSize="22px">{item.Title}</Title>
                                <Grid container width="270px" textAlign="center" paddingTop="10px">
                                    <Title fontSize="16px">{item.Text}</Title>
                                </Grid>
                            </HowItWorksBoxText>
                        </HowItWorksBox>
                    ))}
                </HowItWorksAllBox>
            </HowItWorks>

            <JoinOur data-aos="zoom-in-up">
                <JoinOurBox container>
                    <JoinOurImg src={Austrobaut} alt=""/>
                    <JoinOurBoxText container>
                        <Grid>
                            <Title fontSize="38px">Join Our Weekly Digest</Title>
                            <Text fontSize="22px">Get Exclusive Promotions & Updates Straight To Your Inbox.</Text>
                        </Grid>
                        <JoinOurBoxIB container>
                            <JoinOurBoxInput placeholder="Enter your email here" type="email" name="email"/>
                            <JoinOurBoxButton variant="outlined">
                                <img src={EnvelopeSimple} alt=""/>
                                Subscribe
                            </JoinOurBoxButton>
                        </JoinOurBoxIB>
                    </JoinOurBoxText>
                </JoinOurBox>
            </JoinOur>
        </Grid>
    );
}

export default Home;