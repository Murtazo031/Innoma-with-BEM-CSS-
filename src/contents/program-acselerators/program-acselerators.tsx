import Container from '../../components/container/container'
import './program-acselerators.css'
// import * as React from 'react';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Button } from '@mui/material'

export default function ProgramAcselerators() {
	return (
		<Container>
			<section className='ProgramAcseletators'>
				<h2>Программа акселератора</h2>
				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel1-content'
						id='panel1-header'
					>
						<Typography component='span'>
							<p>Модуль 1 </p>Тенденции и тренды
							современного мира
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов
						консалтинговых компаний
					</AccordionDetails>
					<AccordionDetails>
						Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема
					</AccordionDetails>
					<AccordionDetails>
						3. Что такое внутренние и внешние инновации? Как искать
						инновационные идеи?
					</AccordionDetails>
					<AccordionDetails sx={{color:"#2A79C2"}}>
						9. видео роликов, вебинар с приглашенным экспертом
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large' />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 2</p> Стартап подход к созданию международного IT
							продукта
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large' />}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 3</p> Бизнес моделирование и поиск Product Market
							Fit
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 4</p> Определение рынка, поиск и исследование Целевой аудитории

						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 5</p> Что такое MVP и почему это важно
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 6</p> Unit экономика и финансовое моделирование
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 7</p> Что такое дорожная карта продукта?

						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 8</p> Документы дя международных инвесторов
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandCircleDownIcon color='primary' fontSize='large'/>}
						aria-controls='panel2-content'
						id='panel2-header'
					>
						<Typography component='span'>
							<p>Модуль 9</p> Открытие юридического лица. Возможности для стартапов

						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary aria-controls='panel2-content' id='panel2-header'>
						<Typography component='span'>
							<p>Демо день </p>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Button color='primary' variant='contained'sx={{width:"25%", textAlign:"center"}}>Получить полную программу</Button>
			</section>
		</Container>
	)
}
