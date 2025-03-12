import Container from '../../components/container/container'
import "./footer.css";
import logo from "../../app/assets/img/logo.png"

export default function Footer(){
	return <section className='footer'>
		<Container>
			<div className='footer_text'>
				<div>
					<img src={logo} alt="" />
					<p>Все права защищены</p>
				</div>
				<div className='footer_text-pages'>
					<p>Кто мы?</p>
					<p>Услуги</p>
					<p>Акселератор</p>
					<p>Новости</p>
				</div>
				<div>
					<p>Dubai, Single Business Tower 1503, Business Bay</p>
					<p>Sales@innoma.vc</p>
				</div>
			</div>
		</Container>
	</section>
}