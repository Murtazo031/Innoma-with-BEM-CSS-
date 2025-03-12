import gallery from "../../app/assets/img/gallary.png"
import Container from '../../components/container/container'

export default function Gallery (){
	return <Container>
	<img style={{margin:"5vh 0"}} src={gallery} alt="" />
	</Container>
}