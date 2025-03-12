import Container from '../../components/container/container'
import "./stoimost.css";
import analys from "../../app/assets/img/analys.png"
import settings from "../../app/assets/img/seting.png"
import acselerator from "../../app/assets/img/rocket.png"
import { Button } from '@mui/material'

export default function Stoimost (){
	return <Container>
		<section className='stoimost'>
			<h2>Стоимость</h2>
			<div className='stoimost_grid'>
				<div className='stoimost_grid-card'>
					<img src={analys} alt="" />
					<h3>Анализ международных 
					рынков </h3>
               <h5>Что входит в отчет?</h5>
					<ul>
						<li>Анализ конкурентов</li>
						<li>Анализ инвесторов</li>
						<li>Размеры рынка (TAM,SAM,SOM)</li>
						<li>Анализ СМИ</li>
						<li>Анализ запрос в сети интернет</li>
					</ul>
					<div>
						<p>Готовность</p>
						<span>7 раб. дней</span>
					</div>
					<div>
						<p>Язык</p>
						<span>рус. / англ.</span>
					</div>
					<div>
						<p>Стоимость</p>
						<span className='stoimost_grid-price'>$1 000 </span>
					</div>
				<Button variant='contained' color='primary'>Оставить заявку</Button>
				</div>
				<div className='stoimost_grid-card'>
					<img src={settings} alt="" />
					<h3>Упаковка стартапа 
					под локальные рынки</h3>
               <h5>Что входит в услугу?</h5>
					<ul>
						<li>Анализ локальных рынков</li>
						<li>Бизнес план </li>
						<li>Питч презентация</li>
						<li>Анализ СМИ</li>
						<li>Анализ запрос в сети интернет</li>
					</ul>
					<div>
						<p>Готовность</p>
						<span>7 раб. дней</span>
					</div>
					<div>
						<p>Язык</p>
						<span>рус. / англ.</span>
					</div>
					<div>
						<p>Стоимость</p>
						<span className='stoimost_grid-price'>$1 000 </span>
					</div>
				<Button variant='contained' color='primary'>Оставить заявку</Button>
				</div>
				<div className='stoimost_grid-card'>
					<img src={acselerator} alt="" />
					<h3>Акселератор 
					вашего бизнеса</h3>
               <h5>Что входит в отчет?</h5>
					<ul>
						<li>Анализ конкурентов</li>
						<li>Анализ инвесторов</li>
						<li>Размеры рынка (TAM,SAM,SOM)</li>
						<li>Анализ СМИ</li>
						<li>Анализ запрос в сети интернет</li>
					</ul>
					<div>
						<p>Готовность</p>
						<span>7 раб. дней</span>
					</div>
					<div>
						<p>Язык</p>
						<span>рус. / англ.</span>
					</div>
					<div>
						<p>Стоимость</p>
						<span className='stoimost_grid-price'>$1 000 </span>
					</div>
				<Button variant='contained' color='primary'>Оставить заявку</Button>
				</div>
			</div>
		</section>
	</Container>
}