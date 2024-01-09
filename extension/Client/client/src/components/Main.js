import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CardGroup from 'react-bootstrap/CardGroup';
import spam from "../Assets/Images/portfolio2.png"
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

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

    return (
        <section className="banner" id="home">
            <Container>
                <CardGroup style={{ height: '600px' }}>
                <Card style={{ marginRight: '10px' }}>
                        <Card.Body>
                            <Card.Title>SMS SPAM DETECTOR</Card.Title>
                            {open ? (
                                <div>
                                <Collapse in={open} dimension="width">
                                    <div id="example-collapse-text" style={{ marginTop: '20px' }}>
                                        <Stack direction="vertical" gap={3}>
                                            <Form.Control 
                                                placeholder="Paste your SMS here..." 
                                                as="textarea" 
                                                rows={16}
                                                // maxLength={500}
                                                value={textareaValue}
                                                onChange={(e) => {
                                                    if (e.target.value.length <= 500) {
                                                        setTextareaValue(e.target.value);
                                                    }
                                                }}
                                                style={{ borderColor: isExceedingLimit ? 'red' : undefined }}
                                            />
                                            <div style={{ color: isExceedingLimit ? 'red' : undefined }}>
                                                Character Count: {characterCount} / 500
                                            </div>
                                            <Stack direction="horizontal" gap={3} className="d-flex justify-content-center">
                                                <Button style={{ width: '100px', textAlign: 'center' }} variant="secondary">Submit</Button>
                                                <div className="vr" />
                                                <Button style={{ width: '100px', textAlign: 'center' }} variant="outline-danger" 
                                                    onClick={handleReset}>Reset</Button>
                                            </Stack>
                                        </Stack>
                                    </div>
                                </Collapse>
                            </div>
                        ) : (
                            <div>
                            <Card.Img style={{ height: '400px' }} variant="top" src={spam} />
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                            </div>
                        )}
                            
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Click
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>WEB FRAUD DETECTON</Card.Title>
                            {oopen ? (
                            <div>
                                <Collapse in={oopen} dimension="width">
                                    <div id="example-collapse-text" style={{ marginTop: '20px' }}>
                                    <Stack direction="horizontal" gap={3}>
                                    <Form.Control 
                                        className="me-auto" 
                                        placeholder="Enter URL..."
                                        value={textareaValue2}
                                        onChange={(e) => setTextareaValue2(e.target.value)} />
                                    <Button variant="secondary">Submit</Button>
                                    <div className="vr" />
                                    <Button variant="outline-danger" onClick={handleReset2}>Reset</Button>
                                    </Stack>
                                    </div>
                                </Collapse>
                            </div>
                        ) : (
                            <div>
                            <Card.Img style={{ height: '400px' }} variant="top" src={spam} />
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                            </div>
                        )}
                            
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                onClick={() => setOOpen(!oopen)}
                                aria-controls="example-collapse-text"
                                aria-expanded={oopen}
                            >
                                Click
                            </Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </section>
    );
}
