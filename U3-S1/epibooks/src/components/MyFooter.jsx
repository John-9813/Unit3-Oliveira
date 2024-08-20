import { Container, Row, Col } from 'react-bootstrap'


const MyFooter = () => {
  return (
    <footer className="bg-dark text-light mt-auto py-3">
      <Container>
        <Row>
          <Col>
            <p className="text-center mb-0">&copy; {new Date().getFullYear()} EpiBooks</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
