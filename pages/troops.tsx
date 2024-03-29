import React, { useContext, useState } from "react";
import type { NextPage } from "next";
import GlobalHeader1 from "../components/GlobalHeader1";
import GlobalFooter1 from "../components/GlobalFooter1";
import HeadMetadata from "../components/HeadMetadata";
import AnnouncementBox from "../components/AnnouncementBox";
import {
  ShopContainer,
  ShopItemsWrapper,
  WelcomeHeader1,
  WelcomeHeader2,
} from "../styles/Troops";
import PageTopSpacer from "../components/PageTopSpacer";
import DiscordIcon from "../components/DiscordIcon";
import SectionHeader from "../components/SectionHeader";
import HorizontalSlider from "../components/HorizontalSlider";
import BloomingContainer from "../components/BloomingContainer";
import SignatureButton from "../components/SignatureButton";
import Stepbar from "../components/progressbar/stepbar";
import Image from "next/image";
import { useRouter } from "next/router";
import WeekDataPopup from "../components/WeekDataPopup";
import SuperModalContext from "../contexts/SuperModal";
import {
  Gold,
  Mutant,
  Robot,
  Black,
} from "../components/CyberApeRenderer/Traits";

const Home: NextPage<any> = () => {
  const router = useRouter();
  const { open } = useContext(SuperModalContext);

  const onClickLockdown = () => {
    router.push("/cyberlockdown");  
  };

  const onClickAstral = () => {
    router.push("/fusionchamber");  
  };

  const onWeekClick = () => {
    open("week data", <WeekDataPopup />);
  };

  return (
    <>
      <HeadMetadata />
      <GlobalHeader1 />

      <PageTopSpacer />
      <WelcomeHeader1>

        <div className="divw">
          <div className="flexdiv">
            <div className="div-item">
              <p>current prize pool</p>
              <h1>115.5 SOL</h1>
            </div>
            <div className="div-item">
              <p>Royalties Contribution</p>
              <h1>15.5SOL</h1>
            </div>
            <div className="div-item">
              <p>ending of p2e event</p>
              <h1>Paused</h1>
            </div>
          </div>
          <div className="flexdiv">
            <div className="flex1">
              <p>how can I win $ape</p>
            </div>
            <SignatureButton
              onClick={() => console.log("gg")}
              isContrast
              accent="#5865F2"
            >
              claim $APE airdrop (OFF)
            </SignatureButton>
          </div>
        </div>
      </WelcomeHeader1>
      <ShopContainer>
        <ShopContainer>
          <WelcomeHeader2>
            <div className="stepbar">
              <Stepbar />
            </div>
          </WelcomeHeader2>
        </ShopContainer>
        <ShopContainer>
          <div className="week" onClick={onWeekClick}>
            <h2>Game 5</h2>
            <p>CLICK FOR MORE INFO</p>
          </div>
        </ShopContainer>

        <ShopItemsWrapper>
          <WelcomeHeader2>
            <div className="midle">
              <div className="cut-div purple" onClick={onClickLockdown}>
                <Image
                  src="/cyberlockdown-ape.svg"
                  width="200"
                  height="160"
                  alt="A blue ape"
                />
                <div className="content-cut">
                  <h2>CYBER LOCKDOWN </h2>
                  <p>
                    Rogue Cyber Apes can be locked down in the Cyber Ape Age for
                    [REDACTED].
                  </p>
                  <p>Initiate Cyber Lockdown...</p>
                </div>
              </div>
              <div className="cut-div green" onClick={onClickAstral}>
                <Image
                  src="/beaker.png"
                  width="50"
                  height="140"
                  alt="Beaker with green liquid inside"
                />
                <div className="content-cut">
                  <h2>ASTRAL BREAKERS</h2>
                  <p>Coming soon...</p>
                </div>
              </div>

              <AnnouncementBox />
            </div>
          </WelcomeHeader2>

          <div className="event-sec">
            <BloomingContainer
              accent="#000000"
              customStyles={{
                width: "37%",
                padding: "2rem 2rem 0 0",
                border: "none",
              }}
            >
              <h2>GENERAL STATS</h2>
              <p>last updated 24th October 12:00:00</p>
            </BloomingContainer>
            <BloomingContainer
              accent="#000000"
              customStyles={{
                width: "60%",
                padding: "2rem 2rem 0 0",
                border: "none",
              }}
            >
              <h2>LEADERBOARD FROM MAP 5</h2>
              <p>last updated 24th October 12:00:00</p>
            </BloomingContainer>
          </div>
        </ShopItemsWrapper>

        <WelcomeHeader2>
          <div className="flexitems">
            <div className="flexitems11">
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "100%",
                  marginRight: "50px",
                  padding: "1rem 1rem 0 2rem",
                  border: "none",
                }}
              >
                <div className="flexitem4">
                  <div className="info-spread">
                    <h3>Holders</h3>
                    <div>
                      <Image src="/Vector1.png" width="10" height="10" />
                      <span> +3.6%</span>
                    </div>

                    <h1>1,075</h1>
                  </div>
                  <div className="info-net">
                    <div>
                      <Image src="/net1.png" width="100" height="50" />
                    </div>
                  </div>
                </div>
              </BloomingContainer>

              <div>
                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "100%",
                    marginRight: "50px",
                    padding: "1rem 1rem 0 2rem",
                    border: "none",
                  }}
                >
                  <div className="flexitem4">
                    <div className="info-spread">
                      <h3>Listed Apes</h3>
                      <div>
                        <Image src="/Vector2.png" width="10" height="10" />
                        <span> -22</span>
                      </div>

                      <h1>178</h1>
                    </div>
                    <div className="info-net">
                      <div>
                        <Image src="/net2.png" width="100" height="50" />
                      </div>
                    </div>
                  </div>
                </BloomingContainer>
              </div>
              <div>
                <BloomingContainer
                  accent="#444"
                  customStyles={{
                    width: "100%",
                    marginRight: "50px",
                    padding: "1rem 1rem 0 2rem",
                    border: "none",
                  }}
                >
                  <div className="flexitem4">
                    <div className="info-spread">
                      <h3>TOTAL VOLUME</h3>
                      <div>
                        <Image src="/Vector1.png" width="10" height="10" />
                        <span> </span>
                      </div>

                      <h1>19.5k</h1>
                    </div>
                    <div className="info-net">
                      <div>
                        <Image src="/net3.png" width="100" height="50" />
                      </div>
                    </div>
                  </div>
                </BloomingContainer>
              </div>

              <div className="discord-sec">
                <h2>WANT MORE STATS?</h2>
                <div className="dis-content">
                  <p>
                    Tell us what statistics you want to view in our discord server.{" "}
                  </p>
                </div>
                <SignatureButton
                  onClick={() => {
                    window.location.href = "https://discord.gg/cyberapeage";
                  }}
                  accent="#5865F2"
                >
                  <DiscordIcon fill="rgba(255, 255, 255, 0.35)" />
                  discord server
                </SignatureButton>
              </div>
            </div>

            <div className="apsec">
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>1</h2>
                  <h2 className="num-gray">st</h2>
                  <div className="img-sec">
                    <Gold width={80} height={90} />
                  </div>
                  <span>
                      <p className="white-badge">Millen</p>
                      <p className="blue-badge">@Milan0o</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>2m 9s</p>
                </div>
                <div className="flexitems2">
                  <p>+2 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>2</h2>
                  <h2 className="num-gray">nd</h2>
                  <div className="img-sec">
                    <Robot width={80} height={90} />
                  </div>
                  <span>
                    <p className="white-badge">Millen</p>
                    <p className="blue-badge">@Milan0o</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>2m 23s</p>
                </div>
                <div className="flexitems2">
                  <p>+1.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>2</h2>
                  <h2 className="num-gray">nd</h2>
                  <div className="img-sec">
                    <Mutant width={80} height={90} />
                  </div>
                  <span>
                    <p className="white-badge">Zhxr</p>
                    <p className="blue-badge">@Zhxrax</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>2m 33s</p>
                </div>
                <div className="flexitems2">
                  <p>+1 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>4</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">TomKev</p>
                    <p className="blue-badge">@tomkev300</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>2m 54s</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>5</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">Joshi</p>
                    <p className="blue-badge">@CryptoJoshi93</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>3m 25s</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>6</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">YitakFong</p>
                    <p className="blue-badge">@YitakFong</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>3m 58s</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>7</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">Xummer</p>
                    <p className="blue-badge">@xummer666</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>4m 17s</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>8</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">Packbulver</p>
                    <p className="blue-badge">@Packbulver</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>4m 40s</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>9</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">BigHang</p>
                    <p className="blue-badge">@BigHang</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>A long time</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
              {/* list item end */}
              {/* list item start */}
              <div className="flexitem1">
                <div className="flexitems2">
                  <h2>10</h2>
                  <h2 className="num-gray">th</h2>
                  <div className="img-sec">
                    <Black width={80} height={90} />
                  </div>

                  <span>
                    <p className="white-badge">LilianWong</p>
                    <p className="blue-badge">@LilianWong</p>
                  </span>
                </div>
                <div className="flexitems2">
                  <p>A long time</p>
                </div>
                <div className="flexitems2">
                  <p>+0.5 SOL</p>
                </div>
              </div>
            </div>
          </div>
        </WelcomeHeader2>

        <HorizontalSlider hasControls>
          <ShopItemsWrapper>
            <div className="header-sec">
              <SectionHeader
                title="LOOK FOR YOURSELF"
                description="Keep up with the community on twitter. "
              />
            </div>
            <div className="griditems">
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@linkleo8888</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">@CyberApeAge</span> rock on…
                </p>
                <p>
                  <span className="color">
                    #CYBERAPEAGE
                  </span>
                </p>{" "}
              </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@linkleo8888</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">bro you already know! OOGA! </span>
                  🐵🍌
                </p>
                <p>
                  <span className="color">
                    #OOGAOOGA
                  </span>
                </p>{" "}
              </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@BYEBYEBR</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">There is a reason we have not posted on twitter, but have in discord. </span>
                </p>
                <p>
                  <span className="color">

                  </span>
                </p>{" "}
              </BloomingContainer>
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@MetaKasa</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">Are you Bullish on @CyberApeAge</span>? WEN 100?
                </p>
                <p>
                  <span className="color">
                    #OOGAOOGA #CAA
                  </span>
                </p>{" "}
              </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@Denizaray</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">Thanks again @CyberApeAge</span> 🤝 Never sold one! Next Step: buy more CyberApeAge & waiting for degen_invest mint 🔮
                </p>
                <p>
                  <span className="color">
                  @CyberApeAge @degen_invest
                  </span>
                </p>{" "}
              </BloomingContainer>

              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@ArGen2mNFT</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">@CyberApeAge</span> OOGA?
                </p>
                <p>
                  <span className="color">
                    #OOGAOOGA
                  </span>
                </p>{" "}
              </BloomingContainer>
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@MetaKasa</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  <span className="color">@CyberApeAge</span> remains unmatched when it comes to
                   rewards for holders!! Another week another <span className="color">#SolanaAirdrop</span>!! That's crazy thank you so much <span className="color">#CyberApeAge</span> #OOGAOOGA

                   2.5 SOL ($102)  Airdropped this week! Fellow Cyber Apes, show your gains!!! #SolanaNFTs #Airdrop #CAA
                </p>
                <p>
                  <span className="color">
                    
                  </span>
                </p>{" "}
              </BloomingContainer>
              <BloomingContainer
                accent="#444"
                customStyles={{
                  width: "110%",
                  height: "110%",
                  padding: "1rem 1rem 0 1rem",
                  border: "none",
                  borderBottomLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div className="flexbox">
                  <div className="flex1">
                    <Image src="/Union.png" width="15%" height="10%" />
                    <p>@KK_NFT11</p>
                  </div>
                  <div className="flex1"></div>
                </div>
                <p>
                  Legit the best WL giveaways in any server. Just a chill environment with a team that's building and giving away some SOL in the meantime.
                </p>
                <p>
                  <span className="color">
                    #Earnings
                  </span>
                </p>{" "}
              </BloomingContainer>
            </div>
          </ShopItemsWrapper>
        </HorizontalSlider>
      </ShopContainer>

      <GlobalFooter1 />
    </>
  );
};

export default Home;
