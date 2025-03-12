import "./inviting.css"; 
import "../consultation/consultation.css";
import Container from '../../components/container/container'
import { Button } from '@mui/material'

export default function Inviting (){
	return <section className='consultation inviting'>
         <Container>
				<div className='inviting_text'>
					<h2>Мы создаем международное сообщество экспертов и партнеров</h2>
					<p>Если вы или ваш бизнес может быть полезен IT  командам при выходе на международные рынки,  приглашем вас стать нашим партнером</p>
					<Button variant='contained' color='primary'>Стать партнером</Button>
				</div>
			</Container>
	</section>
}