import React, { Component } from "react";
import {
    Text,
    View
} from 'react-native';
import { Content, Grid, Col, Header, Title, H3, H1 } from 'native-base';
import { connect } from "react-redux";

export class CountTop extends Component {
    render() {
        let sumTotal = 0;
        const { people } = this.props;
        people.map((item) => {
            sumTotal += item.value;
        })

        return (
            <View style={{ flexDirection: "row" }}>
                <View style={{marginLeft:20}}>
                    <H3>จำนวนคน</H3>
                    <Text style={{ fontSize: 70 }}>{people.length}</Text>
                </View>
                <View style={{marginLeft:80}}>
                    <H3>ราคารวม</H3>
                    <Text style={{ fontSize: 70 }}>{sumTotal}</Text>
                </View>
            </View>
        )

    }
}

const mapStateToProps = (state) => {
    const { people } = state.data;
    return { people };
};

export default connect(
    mapStateToProps,
    {}
)(CountTop);
