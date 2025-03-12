import Container from '../../components/container/container'
import './events.css'
import mena from '../../app/assets/img/mena.png'
import vebinar from '../../app/assets/img/vebinar.png'
import bangkok from '../../app/assets/img/bangkok.png'

export default function Events() {
	return (
		<Container>
			<section className='events'>
				<h2>Мероприятия и события</h2>
				<div className='events_flex'>
					<div className='events_flex-card'>
						<img src={mena} alt='' />
						<div>
							<h4>Новый отчет по MENA</h4>
							<p>
								Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
								раундов, ТОП сферы)
							</p>
							<span>22.11.2022</span>
						</div>
					</div>
					<div className='events_flex-card'>
						<img src={vebinar} alt='' />
						<div>
							<h4>Вебинар по особенностям 
							рынков Ближнего Востока</h4>
							<p>Поговорим с экспертами рынков 
							в формате дискуссии</p>
							<span>22.11.2022</span>
						</div>
					</div>
					<div className='events_flex-card'>
						<img src={bangkok} alt='' />
						<div>
							<h4>Вебинар по особенностям 
							рынков Ближнего Востока</h4>
							<p>Поговорим с экспертами рынков 
							в формате дискуссии</p>
							<span>22.11.2022</span>
						</div>
					</div>
				</div>
			</section>
		</Container>
	)
}
