import Container from "../../components/container/container";
import "./who's-are-we_For.css";

export default function WhoAreFor() {
  return (
    <Container>
      <section className="WhoAreWeFor">
        <h3>Для кого мы?</h3>
        <div className="WhoAreWeFor_subjects">
          <div>
            <h1>01</h1>
            <h5>IT проекты на стадии идеи</h5>
            <p>
              Для стартапов, которые планируют привлечь международные
              инвестиции, протестировать спрос и запустить продукт
            </p>
          </div>
          <div>
            <h1>02</h1>
            <h5>Инновационный бизнес</h5>
            <p>
              Для уже работающего технологического бизнес, позволим найти новые
              международне рынки сбыта, масштабировать бизнес
            </p>
          </div>
          <div>
            <h1>03</h1>
            <h5>Корпорации</h5>
            <p>
              Для уже работающего технологического бизнес, позволим найти новые
              международне рынки сбыта, масштабировать бизнес
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
