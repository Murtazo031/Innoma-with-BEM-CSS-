import "./heder-section.css";
import logo from "../../app/assets/img/logo.png"
import Container from "../../components/container/container";
import menu from "../../app/assets/img/menu.png"

export default function HeaderSection(){
    return <section className="heder_section">
        <Header/>
    </section>
}

//header nvigation
function Header (){
    return <Container> 
       <header className="header">
        <img className='logo' src={logo} alt="" />
        <ul className="navigation">
            <li>Кто мы</li>
            <li>Услуги</li>
            <li>Акселератор</li>
            <li>Новости</li>
        </ul>
        <div style={{display:'flex', alignItems:"center", gap:"10px"}}>
        <button style={{
            backgroundColor:"#07AF91",
            color:"white",
            border:"none",
            borderRadius:"10px",
            padding:"2vh 3vh"
        }}>
            Войти
        </button>
        <img className='menu' src={menu} alt="" />
        </div>
       </header>
       <HeroSection/>
    </Container>
}

//herosection
function HeroSection(){
    return <section className="hero-section">
        <h1>Запустите <br /> <span>технологический IT-бизнес</span> <br />на международных рынках</h1>
        <h3>Открыт набор заявок на акселератор</h3>
        <button>Подать заявку</button>
    </section>
}