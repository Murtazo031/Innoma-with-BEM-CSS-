import Container from '../../components/container/container'
import "./partners.css";
import partner1 from "../../app/assets/img/invest2.png"
import partner2 from "../../app/assets/img/invest3.png"
import partner3 from "../../app/assets/img/photo5.png"
import partner4 from "../../app/assets/img/partner4.png"
import partner5 from "../../app/assets/img/partner5.png"
import partner6 from "../../app/assets/img/partner6.png"
import partner7 from "../../app/assets/img/partner7.png"
import partner8 from "../../app/assets/img/partner8.png"

export default function Partners(){
    return <Container>
		<section className='partners'>
			<h2>Наши партнеры</h2>
			<div className='partners_grid'>
          <div><img src={partner1} alt="" /></div>
          <div><img src={partner2} alt="" /></div>
          <div><img src={partner3} alt="" /></div>
          <div><img src={partner4} alt="" /></div>
          <div><img src={partner5} alt="" /></div>
          <div><img src={partner6} alt="" /></div>
          <div><img src={partner7} alt="" /></div>
          <div><img src={partner8} alt="" /></div>
			 </div>
		</section>
	 </Container>
}