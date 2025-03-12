import "./consultation.css";
import Container from "../../components/container/container";

export default function Consultation() {
  return (
    <section className="consultation">
      <Container>
        <div className="consultation_text">
          <h2>
            Научитесь исследовать иностранные рынки и откройте новые возможности
            для своего бизнеса
          </h2>
          <p>Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки</p>
          <button>Получить консультацию</button>
        </div>
      </Container>
    </section>
  );
}
