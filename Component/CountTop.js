import React, { Component } from "react";
import {
    Text,
    View
} from 'react-native';
import { Content, Grid, Col, Header, Title, H3, H1 } from 'native-base';

export default class CountTop extends Component {
    render() {

        return (
            <View style={{ flexDirection: "row",justifyContent:"space-around" }}>
                <View >
                    <H3>จำนวนคน</H3>
                    <Text style={{ fontSize: 70 }}>{this.props.count}</Text>

                </View>
                <View >
                    <H3>ราคารวม</H3>
                    <Text style={{ fontSize: 70 }}>{this.props.count}</Text>

                </View>
            </View>
        )

    }
}
