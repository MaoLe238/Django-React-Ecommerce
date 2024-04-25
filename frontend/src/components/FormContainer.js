import React, {Children} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer({children}) {
    return (
        <Container>
            {Children.map(children, child => 
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        {child}
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default FormContainer