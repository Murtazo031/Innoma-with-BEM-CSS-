import "./markets.css";
import Container from "../../components/container/container";
import profile from "../../app/assets/img/fatima.png";
import icon from "../../app/assets/img/arrow.png";

export default function Markets() {
  return (
    <Container>
      <section className="markets">
        <h1>С какими рынками мы работаем?</h1>
        <div className="markets_region">
          <div style={{ backgroundColor: "#88BBD8", color: "white" }}>
            <p>Ближний восток</p>
          </div>
          <div>
            <p>Азия</p>
          </div>
          <div>
            <p>Латинская Америка</p>
          </div>
          <div>
            <p>Африка</p>
          </div>
        </div>
        <Mena/>
      </section>
    </Container>
  );
}

function Mena() {
  return (
    <section className="markets_mena">
      <div className="markets_mena-info">
        <h2>
          Чем интересен <br /> <span>Рынок MENA:</span>
        </h2>
        <p>
          ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис, Йемен,
          Египет, Алжир
        </p>
        <button>Выйти на рынок</button>
        <div className="markets_mena-info_profile">
          <div>
            <img src={profile} alt="" />
          </div>
          <div>
            <h5>Фатима</h5>
            <p>Менеджер по MENA</p>
          </div>
        </div>
      </div>
      <div className="markets_mena-numbers">
        <div>
          <h2>{">"}5,5Млрд</h2>
          <p>Инвестиции pre-seed, seed</p>
        </div>
        <div>
          <h2>{">"}300</h2>
          <p>Акселераторов, инкубаторов</p>
        </div>
        <div>
          <h2>73</h2>
          <p>Венчурных фонда</p>
        </div>
        <div style={{backgroundColor:"#1178B2", color:"white"}}>
          <img src={icon} alt="" />
          <p style={{color:"white"}}>Скачать отчет по рынку MENA</p>
        </div>
      </div>
    </section>
  );
}
