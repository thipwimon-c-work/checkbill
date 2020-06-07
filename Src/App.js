/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TextInput,
} from 'react-native';
import {
    // Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import CountTop from "./Component/CountTop";
import TwoTab from "./Component/TwoTab";
import { Container,Content, Grid, Col, Header, Title, H3, H1, Body , Tab, Tabs, TabHeading,Icon,Button} from 'native-base';
import { connect } from "react-redux";
import { SetPeopleData } from "./Action";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listPeople: [],
            peopleAdd: ""
        };
    }

    componentDidMount = () => {
        let { people } = this.props;
        let { listPeople } = this.state;
        this.setState({ listPeople: people })
    }


    HandlePeople = (text) => {
        this.setState({ peopleAdd: text })
    }

    AddPeople = () => {
        let { peopleAdd, listPeople } = this.state;
        const {SetPeopleData,people} = this.props;

        listPeople.push({
            name: peopleAdd,
            value: 100000
        });

        console.log(people,'curpeople')
        SetPeopleData(listPeople);
        this.setState({ listPeople: listPeople, peopleAdd: "" })
    }

    ClearPeople = () => {
        const {SetPeopleData} = this.props;
        SetPeopleData([]);
        this.setState({ listPeople: [] })
    }

    render() {
        let { listPeople, peopleAdd } = this.state;
        const{people} = this.props;

        return (

            <View style={{ flex: 1, }}>
                <Header>
                    <Body>
                        <Title>CheckBill</Title>
                    </Body>
                </Header>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}>
                    <CountTop count={people.length}/>
                    <TwoTab/>
                    {/* <TwoTab 
                        HandlePeople={this.HandlePeople}
                        AddPeople = {this.AddPeople}
                        peopleAdd = {peopleAdd}
                        listPeople = {listPeople}
                        ClearPeople = {this.ClearPeople}
                    /> */}
                </View>
            </View>

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
  )(App);

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});


// const TwoTab = (props) =>{
//     return (
//         <Container>
//             <Tabs>
//                 <Tab heading={
//                     <TabHeading style={{ backgroundColor: "white" }}>
//                         <Icon name="md-list" /><Text>รายการ</Text>
//                     </TabHeading>}>
//                 </Tab>
//                 <Tab heading={
//                     <TabHeading style={{ backgroundColor: "white" }}>
//                         <Icon name="md-people" />
//                         <Text>คนจ่าย</Text>
//                     </TabHeading>}>
//                     <AddPeople
//                         handlePeople={props.HandlePeople}
//                         addPeople={props.AddPeople}
//                         value={props.peopleAdd} />

//                     <ListPeople listPeople={props.listPeople} clear={props.ClearPeople} />
//                 </Tab>
//             </Tabs>
//         </Container>
//     );
// }

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
                    <Text style={{color:"red"}}>Clear</Text>
                </Button>}
            />
        </React.Fragment>)

}
