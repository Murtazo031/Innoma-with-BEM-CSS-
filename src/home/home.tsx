import "./home.css";
import HeaderSection from '../contents/header-section/header-section';
import Services from "../contents/our-service/our-services";
import WhoAreFor from "../contents/who's-are-we_For/who's-are-we_For";
import Consultation from "../contents/consultation/consultation";
import Markets from "../contents/markets/markets";
import AboutAcselerators from "../contents/about-acselerators/about-acselerators";
import ProgramAcselerators from '../contents/program-acselerators/program-acselerators'
import InvestorsPartners from '../contents/investors-and-partners/investors-and-partners'
import Results from '../contents/results/results'
import Stoimost from '../contents/stoimost/stoimost'
import WhoAreWe from '../contents/who-are-we/who-are-we'
import Roman from '../contents/roman/roman'
import Gallery from '../contents/gallery/gallery'
import ExpertAndActors from '../contents/expert-and-actors/expert-and-actors'
import Partners from '../contents/partners/partners'
import Inviting from '../contents/inviting/inviting'
import Events from '../contents/events/events'
import FAQ from '../contents/faq/faq'
import Footer from '../contents/footer/footer'

export default function Home(){
    return <>
    <HeaderSection/>
    <Services/>
    <WhoAreFor/>
    <Consultation/>
    <Markets/>
    <AboutAcselerators/>
    <ProgramAcselerators/>
    <InvestorsPartners/>
    <Results/>
    <Stoimost/>
    <WhoAreWe/>
    <Roman/>
    <Gallery/>
    <ExpertAndActors/>
    <Partners/>
    <Inviting/>
    <Events/>
    <FAQ/>
    <Footer/>
    </>
}