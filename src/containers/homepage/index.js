import {
    TapTop,
    CustomModal,
    Header,
    Banner,
    CollectionBanner,
    SpecialCollection,
    // TopCollection,
    Parallax,
    // SpecialProducts,
    Service,
    Instagram,
    LogoBlock,
    Footer
} from "../../components"
import {
    TopCollection
} from "../../containers"
import {
  ProductSlider
} from "../../utils"


function HomePage() {
    return (
        <>
            {/* <CustomModal /> */}
            <Header topClass="top-header" />
            <Banner />
            <Service
                sectionClass={"service border-section small-section border-top-0"}
            />
            <CollectionBanner />
            <SpecialCollection title="title1 section-t-space" inner="title-inner1" hrClass={false} />
            <TopCollection
                type="goggles"
                noTitle={true}
                designClass="layout9-box ratio_asos"
                productSlider={ProductSlider}
                noSlider="true"
                cartClass="cart-info"
            /> 
            <Parallax />
            <Instagram type="goggles" />
            <div className="section-b-space">
                <LogoBlock />
            </div>
            <Footer footerClass={`footer-light`} footerLayOut={"light-layout upper-footer"} footerSection={"small-section border-section border-top-0"} belowSection={"section-b-space light-layout"} newLatter={true} logoName={"logo.png"} />
        </>
    );
}

export default HomePage;