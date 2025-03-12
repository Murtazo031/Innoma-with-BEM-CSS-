import Container from '../../components/container/container'
import './expert-and-actors.css'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import expert1 from '../../app/assets/img/photo.png'
import expert2 from '../../app/assets/img/expert2.png'
import expert3 from '../../app/assets/img/expert3.png'
import expert4 from '../../app/assets/img/expert4.png'

export default function ExpertAndActors() {
	return (
		<Container>
			<section className='experts-and-actors'>
				<h2>Эксперты и трекеры программы</h2>
				<div className='experts-and-actors_flex'>
					<ExpandCircleDownIcon color='primary' fontSize='large' sx={{rotate:"90deg"}}/>
					<div className='experts-and-actors_flex-profile'>
						<img src={expert1} alt='' />
						<h4>Юрий Ким</h4>
						<p>
							Проведение исследования целевой аудитории позволит сформировать
							Product market fit
						</p>
					</div>
					<div className='experts-and-actors_flex-profile'>
						<img src={expert2} alt='' />
						<h4>Юрий Ким</h4>
						<p>
							Проведение исследования целевой аудитории позволит сформировать
							Product market fit
						</p>
					</div>
					<div className='experts-and-actors_flex-profile'>
						<img src={expert3} alt='' />
						<h4>Юрий Ким</h4>
						<p>
							Проведение исследования целевой аудитории позволит сформировать
							Product market fit
						</p>
					</div>
					<div className='experts-and-actors_flex-profile'>
						<img src={expert4} alt='' />
						<h4>Юрий Ким</h4>
						<p>
							Проведение исследования целевой аудитории позволит сформировать
							Product market fit
						</p>
					</div>
					<ExpandCircleDownIcon color='primary' fontSize='large' sx={{rotate:"-90deg"}}/>
				</div>
			</section>
		</Container>
	)
}
