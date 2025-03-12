import "./our-services.css";
import Container from "../../components/container/container";
import analitics from "../../app/assets/img/sec1img.png";
import onlineAcselerator from "../../app/assets/img/sec1img1.png";

export default function Services() {
  return (
    <Container>
      <section className="services">
        <h3>Наши услуги</h3>
        <div className="services_analitics">
          <div className="services_analitics-text">
            <h5>Аналитические исследования</h5>
            <p>
              Одним из наших ключевых направлений является анализ
              технологических трендов на международных рынках. Мы проводим
              анализ на основе публичных исследований McKinsey, BCG, PWC,
              Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S, PitchBook
              а также агрегируем и анализируем данные из открытых международных
              источников патенты, медиа, научные публикации
            </p>
            <button>Узнать подробнее</button>
          </div>
          <div>
            <img  src={analitics} alt="" />
          </div>
        </div>
        <div className="services_onlineAcselerator">
          <div>
            <img src={onlineAcselerator} alt="" />
          </div>
          <div className="services_onlineAcselerator-text">
            <h5>Онлайн акселератор для IT бизнеса</h5>
            <p>
              Онлайн программа аскелерации IT бизнеса позволит вашей команде
              открыть новые горизонты и возможности для бизнеса на глобальных
              рынках. В результате программы вы получите возможность
              презентовать свой проект для международных инвесторов и локальных
              партнеров
            </p>
            <button>Узнать подробнее</button>
          </div>
        </div>
      </section>
    </Container>
  );
}
