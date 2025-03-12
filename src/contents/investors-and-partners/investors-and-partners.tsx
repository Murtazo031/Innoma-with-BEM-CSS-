import { Button } from '@mui/material'
import Container from '../../components/container/container'
import "./investors-and-partners.css";
import invest1 from "../../app/assets/img/invest1.png"
import invest2 from "../../app/assets/img/invest2.png"
import invest3 from "../../app/assets/img/invest3.png"
import invest4 from "../../app/assets/img/invest4.png"
import invest5 from "../../app/assets/img/invest5.png"
import invest6 from "../../app/assets/img/invest6.png"

export default function InvestorsPartners(){
	return <section className='inverstors-partners'>
		<Container>
			<div className='inverstors-partners_flex'>
				<div className='inverstors-partners_flex-left'>
				<h2>Попадите на радары <br /> инвесторов и партнеров</h2>
				<p>В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках</p>
				<Button variant='contained' color='success'>Записаться в акселератор</Button>
				</div>
				<div className='inverstors-partners_flex-rigth'>
					<div><img src={invest1} alt="" /></div>
					<div><img src={invest2} alt="" /></div>
					<div><img src={invest3} alt="" /></div>
					<div><img src={invest4} alt="" /></div>
					<div><img src={invest5} alt="" /></div>
					<div><img src={invest6} alt="" /></div>
				</div>
			</div>
		</Container>
	</section>
}