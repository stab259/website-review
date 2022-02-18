import {Container, Row, Col, Form, Button} from "react-bootstrap"

function TravelForm({show, handleShow}) {
    console.log(`hello ${show}`);
    let form = <div></div>
    if(show) {
        console.log(`handle ${show}`);
        form = <div id="travelFormContainer">
            <div id="travelForm">
                <Container className="py-5" id="travelFormChild">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={10} lg={8}>
                            <Form id="writeReviewsForm" className="text-center">
                            <div className="mb-5">
                                <h2 className="text-primary">Where and when you wan to travel?</h2>
                            </div>
                            <Form.Group className="mb-4">
                                <Form.Label className="label text-primary-8">Day</Form.Label>
                                <Form.Control type="date" name="date"/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className="label text-primary-8">Place</Form.Label>
                                <Form.Control type="map" name="place"/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className="label text-primary-8">Mode</Form.Label>
                                <Form.Control type="mode" name="mode"/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Row>
                                    <Col>
                                        <Button type="submit" className="primary btn-primary">Confirm</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="outline-secondary" onClick={() => handleShow(false)}>Cancel</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    }

  return (
        <>
            {form}
        </>
  )
}

export default TravelForm