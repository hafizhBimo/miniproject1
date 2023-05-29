import { Row,Col, Input,Button } from "reactstrap"

const Footer = ()=>{
    return(
        <Row style={{color:"white", backgroundColor:"black"}}>
            <hr/>
            <Col>
            <h4>contact us</h4>
            <p>085882525100</p>
            <p>hfzhbimo@gmail.com</p>
            </Col>
            <Col>
            <h4>Follow us</h4>
            <p>instagram</p>
            <p>facebook</p>
            </Col>
            <Col>
            <h4>Post it! newsletter</h4>
            <p>join our mailing list!</p>
            <Input placeholder="your email adress"></Input>
            <Button>Submit</Button>
            </Col>
        </Row>
    )
}

export default Footer