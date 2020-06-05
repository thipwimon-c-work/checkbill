import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Input, InputGroup, Button, Grid, Col, Row } from 'native-base';

export default class TwoTab extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="md-list" /><Text>รายการ</Text></TabHeading>}>
                        {/* <Tab1 /> */}
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="md-people" /><Text>คนจ่าย</Text></TabHeading>}>
                        <AddPeople />
                    </Tab>
                </Tabs>

            </Container>
        );
    }
}

const AddPeople = () => {
    return (<React.Fragment>
        <Grid style={{marginTop:5,marginLeft:5,marginRight:5}}>
            <Col >
                <Row>
                    <Input  placeholder='ระบุชื่อ' />
                    <Button style={{width:100,justifyContent:"center"}} primary><Text>เพิ่ม</Text></Button>
                </Row>
            </Col>
        </Grid>


    </React.Fragment>)
};