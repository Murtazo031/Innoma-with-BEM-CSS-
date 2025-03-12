import Container from '../../components/container/container'
import "./who-are-we.css";
import dashboard from "../../app/assets/img/dash.png"


export default function WhoAreWe(){
	return <Container>
		<section className='whoarewe'>
			<h2>Кто мы?</h2>
			<div className='whoarewe_flex'>
				<div className='whoarewe_flex-image'>
					<img src={dashboard} alt="" />
				</div>
				<div className='whoarewe_flex-text'>
					<p> <span>INNOMA.VC </span> -  Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.</p>
					<p>Наша команда состоит из профессионалов своего дела и основной нашей целью является помощь IT компаниям получить необходимые знания и пакеты документов, чтобы успешно запустить свой продукт на международных рынках. </p>
				</div>
			</div>
		</section>
	</Container>
}