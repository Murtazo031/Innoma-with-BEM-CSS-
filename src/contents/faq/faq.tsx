import { Telegram, WhatsApp } from '@mui/icons-material'
import Container from '../../components/container/container'
import "./faq.css";
import { Button } from '@mui/material'

export default function FAQ(){
	return <section className='inverstors-partners faq'>
         <Container>
				<section className='faq_flex'>
					<div className='faq_flex-left'>
						<div>
						<h2>Остались вопросы?</h2>
						<p>Оставьте заявку и наша команда свяжется с вами</p>
						</div>
						<div>
							<h5 style={{fontSize:"22px", marginBottom:"10px"}}>
							Или напишите нам:
							</h5>
							<div>
								<div><Telegram color='primary' sx={{bgcolor:"white", borderRadius:"50%", padding:"1vh",boxShadow:"0 0 15px grey"}}/>Telegram
								</div>
								<div><WhatsApp color='success' sx={{bgcolor:"white", borderRadius:"50%", padding:"1vh" ,boxShadow:"0 0 15px grey"}}/> Whatsapp </div>
							</div>
						</div>
					</div>
					<form className='faq_flex-right'>
                 <input placeholder='Имя' type="text" />
                 <input placeholder='Почта' type="text" />
                 <input placeholder='phone' type="number" />
					  <Button variant='contained' color='success'>Оставить заявку</Button>
					</form>
				</section>
			</Container>
	</section>
}