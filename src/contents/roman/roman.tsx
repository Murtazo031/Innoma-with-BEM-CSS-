import Container from '../../components/container/container'
import './roman.css'
import roman from '../../app/assets/img/roman.png'

export default function Roman() {
	return (
		<Container>
			<section className='roman'>
				<div className='roman_image'>
					<img src={roman} alt='' />
				</div>
				<div className='roman_words'>
					<p>
						Всем привет! Меня зовут Роман. Последние 6 лет я являюс частью
						инновационной экосистемы СНГ, прошел путь от проектного менеджера до
						руководителя продукта по автоматизированному скаутингу и скорингу
						стартапов. За 6 лет работы я увидел множество ошибок и отсутствие
						ориентации акселерационных программ под запросы стартапов. Все
						акселераторы выполнялись ради акселераторв и выполнения КПЭ.{' '}
					</p>
					<div className='roman-info'>
						<h4>Роман Гайн</h4>
						<span>Основатель INNOMA.VC</span>
					</div>
				</div>
			</section>
		</Container>
	)
}
