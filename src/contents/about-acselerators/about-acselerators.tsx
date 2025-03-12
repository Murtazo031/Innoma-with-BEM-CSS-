import "./about-acselerators.css";
import Container from "../../components/container/container";
import globus from "../../app/assets/img/globus.png"
import person from "../../app/assets/img/person.png"
import play from "../../app/assets/img/play.png"

export default function AboutAcselerators() {
  return (
    <Container>
      <section className="about-acseleratos">
        <h2>Об акселераторе IT бизнеса</h2>
        <p>
          Программа акселератора расчитана на 8 недель интенсивного онлайн курса
          с вебинарами приглашенных экспертов по международным рынкам, разборами
          ваших идей и проектов{" "}
        </p>
        <div className="about-acseleratos_numbers">
            <div>
                <h1>3</h1>
                <p>Месяца обучения</p>
            </div>
            <div>
                <img src={globus} alt="" />
                <p>Приглашенные эксперты</p>
            </div>
            <div>
                <img src={person} alt="" />
                <p>Персональный менеджер</p>
            </div>
        </div>
        <div className="about-acseleratos_playback">
            <p>Об акселерационной программе</p>
            <img src={play} alt="" />
        </div>
      </section>
    </Container>
  );
}
