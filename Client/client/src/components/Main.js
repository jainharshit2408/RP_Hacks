import React from "react";
import { Container, Row, Tab ,Col, Nav} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CardGroup from 'react-bootstrap/CardGroup';
import spam from "../Assets/Images/portfolio2.png"
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import sms from '../Assets/Images/sms.png';
import web from '../Assets/Images/web.png';

export const Main = () => {
    const [open, setOpen] = useState(false);
    const [oopen, setOOpen] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');
    const [textareaValue2, setTextareaValue2] = useState('');

    const handleReset = () => {
        setTextareaValue('');
    };
    const handleReset2 = () => {
        setTextareaValue2('');
    };
    const characterCount = textareaValue.length;
    const isExceedingLimit = characterCount > 500;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const submittedText = textareaValue;
        console.log('Submitted Text:', submittedText);
        handleReset();
      };
    const handleSubmit2 = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const url_text = textareaValue2;
    console.log('URL:', url_text);
    handleReset2();
    };  
      

    return (
        <section className="banner" id="main">
            <Container>
                <Row>
                    <Col>
                    <h2>DETECT</h2>
                    <p>"Explore my diverse portfolio of projects, each a testament to my passion for problem-solving and creativity. From web development to software engineering, discover the impact of my work."</p> 
                    <Tab.Container id="projetcs-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">SMS SPAM DETECTOR</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">WEB FRAUD DETECTOR</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="third">ML</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                    <Tab.Content className="tb">
                        <Tab.Pane eventKey="first">
                            <Row>
                            <Card style={{ border: 'none',background: 'transparent'}}>
                        <Card.Body style={{background: '#c8c2c2', borderRadius: 15 }}>
                            
                            {open ? (
                                <div>
                                <Collapse in={open} dimension="width">
                                    <div id="example-collapse-text" style={{ marginTop: '20px' }}>
                                    <Card.Title style={{textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>SMS SPAM DETECTOR</Card.Title>
                                        <Stack direction="vertical" gap={3}>
                                            <Form.Control 
                                                placeholder="Paste your SMS here..." 
                                                as="textarea" 
                                                rows={1}
                                                // maxLength={500}
                                                value={textareaValue}
                                                onChange={(e) => {
                                                    if (e.target.value.length <= 500) {
                                                        setTextareaValue(e.target.value);
                                                    }
                                                }}
                                                style={{ borderColor: isExceedingLimit ? 'red' : undefined }}
                                            />
                                            <Stack direction="horizontal" gap={3} className="d-flex justify-content-center">
                                                <Button style={{ width: '100px', textAlign: 'center'}} variant="secondary" onClick={handleSubmit}>Submit</Button>
                                                <div className="vr" />
                                                <Button style={{ width: '100px', textAlign: 'center' }} variant="outline-danger" 
                                                    onClick={handleReset}>Reset</Button>
                                            </Stack>
                                            <div style={{ color: isExceedingLimit ? 'red' : undefined }}>
                                                Character Count: {characterCount} / 500
                                            </div>
                                        </Stack>
                                    </div>
                                </Collapse>
                            </div>
                        ) : (
                           
                            <div>
                            {/* <Card.Img style={{width: 427, height: 400, borderRadius: 15}} variant="top" src={spam} /> */}
                            {/* <Card.Text style={{width: 405, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                               
                            </Card.Text>  */}
                            <Card.Img style={{width: 450, height: 400, borderRadius: 15}} variant="top" src={sms} />
                            </div>
                           
                        )}
                            
                        </Card.Body>
                        <Card.Footer style={{width: 475,background: 'transparent', border:'none'}}>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{width: 100, height: 40, background: '#4682A9', borderRadius: 15}}
                            >
                                DETECT
                            </Button>
                        </Card.Footer>
                </Card>
                                
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                            <Row>
                            <Card style={{ border: 'none',background: 'transparent'}}>
                        <Card.Body style={{width: 475, background: '#c8c2c2', borderRadius: 15 }}>
                           
                            {oopen ? (
                            <div>
                                <Collapse in={oopen} dimension="width">
                                    <div id="example-collapse-text" style={{ marginTop: '20px' }}>
                                    <Card.Title style={{textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>WEB FRAUD DETECTON</Card.Title>
                                    <Stack direction="vertical" gap={3}>
                                    <Form.Control 
                                        className="me-auto" 
                                        placeholder="Enter URL..."
                                        value={textareaValue2}
                                        onChange={(e) => setTextareaValue2(e.target.value)} />
                                    <Stack direction="horizontal" gap={3} className="d-flex justify-content-center">
                                        <Button style={{ width: '100px', textAlign: 'center'}} variant="secondary" onClick={handleSubmit2}>Submit</Button>
                                        <div className="vr" />
                                        <Button style={{ width: '100px', textAlign: 'center' }} variant="outline-danger" 
                                            onClick={handleReset2}>Reset</Button>
                                     </Stack>
                                    {/* <Button variant="secondary">Submit</Button>
                                    <div className="vr" />
                                    <Button variant="outline-danger" onClick={handleReset2}>Reset</Button> */}
                                    </Stack>
                                    </div>
                                </Collapse>
                            </div>
                        ) : (
                            <div>
                            {/* <Card.Img style={{width: 427, height: 400, borderRadius: 15}} variant="top" src={spam} /> */}
                            {/* <Card.Text style={{width: 405, color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text> */}
                            <Card.Img style={{width: 450, height: 400, borderRadius: 15}} variant="top" src={web} />
                            </div>
                        )}
                            
                        </Card.Body>
                        <Card.Footer style={{width: 475,background: 'transparent', border:'none'}}>
                            <Button
                                onClick={() => setOOpen(!oopen)}
                                aria-controls="example-collapse-text"
                                aria-expanded={oopen}
                                style={{width: 100, height: 40, background: '#4682A9', borderRadius: 15}}
                            >
                                DETECT
                            </Button>
                        </Card.Footer>
                    </Card>
              
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
                
                    
            </Container>
        </section>
    );
}
