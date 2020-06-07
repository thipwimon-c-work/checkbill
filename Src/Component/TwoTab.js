import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Button, Grid, Col, Row, List, ListItem, Left, Right } from 'native-base';
import {
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { SetPeopleData } from "../Action";

export class TwoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPeople: [],
            peopleAdd: ""
        };
    }

    HandlePeople = (text) => {
        this.setState({ peopleAdd: text })
    }

    AddPeople = () => {
        let { peopleAdd, listPeople } = this.state;
        const { SetPeopleData, people } = this.props;

        if (peopleAdd && peopleAdd.trim() !== "") {
            listPeople.push({
                name: peopleAdd,
                value: 100
            });

            console.log(people, 'curpeople')
            SetPeopleData(listPeople);
            this.props.onUpdate();
            this.setState({ listPeople: listPeople, peopleAdd: "" })
        }
    }

    ClearPeople = () => {
        const { SetPeopleData } = this.props;
        SetPeopleData([]);
        this.props.onUpdate();
        this.setState({ listPeople: [] })
    }

    render() {

        let { listPeople, peopleAdd } = this.state;

        return (
            <Container>
                <Tabs>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: "white" }}>
                            <Icon name="md-list" /><Text>รายการ</Text>
                        </TabHeading>}>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: "white" }}>
                            <Icon name="md-people" />
                            <Text>คนจ่าย</Text>
                        </TabHeading>}>
                        <AddPeople
                            handlePeople={this.HandlePeople}
                            addPeople={this.AddPeople}
                            value={peopleAdd} />

                        <ListPeople listPeople={listPeople} clear={this.ClearPeople} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { people } = state.data;
    return { people };
};

export default connect(
    mapStateToProps,
    { SetPeopleData }
)(TwoTab);

const AddPeople = (props) => {
    return (
        <View style={{ marginTop: 20, marginLeft: 5, marginRight: 5 }}>

            <View style={{ flexDirection: "row", }}>
                <TextInput style={{ borderBottomWidth: 1, width: 300 }}
                    onChangeText={(text) => {
                        props.handlePeople(text);
                    }}
                    placeholder='ระบุชื่อ'
                    value={props.value}
                />
                <Button
                    style={{ width: 90, justifyContent: "center", marginLeft: 5 }}
                    onPress={() => props.addPeople()}
                    primary>
                    <Text>เพิ่ม</Text>
                </Button>
            </View>
        </View>)
};

const ListPeople = (props) => {
    return (
        <React.Fragment>
            <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ marginLeft: 30, width: 200 }}>ชื่อ</Text>
                <Text style={{ marginRight: 100 }}>จ่าย</Text>
            </View>

            <FlatList
                data={props.listPeople}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index, separators }) => (

                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderColor: "black" }}>

                        <Text style={{ marginLeft: 30, width: 100 }}>{item.name}</Text>
                        <Text style={{ marginRight: 100 }}>{item.value}</Text>


                    </View>
                )}
                ListFooterComponent={props.listPeople.length > 0 && <Button
                    style={{ width: 90, backgroundColor: "none", justifyContent: "center", marginLeft: 250, marginTop: 50 }}
                    onPress={() => props.clear()}
                >
                    <Text style={{ color: "red" }}>Clear</Text>
                </Button>}
            />
        </React.Fragment>)

}