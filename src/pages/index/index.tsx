import { View, Text } from "@tarojs/components";
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Index extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    Taro.createSelectorQuery()
      .select("#testId")
      .boundingClientRect((rec) => {
        console.log("rec", rec);
      })
      .exec();
  }

  componentDidUpdate() {
    Taro.createSelectorQuery()
      .select("#testId")
      .boundingClientRect((rec) => {
        console.log("rec", rec);
      })
      .exec();
  }

  render() {
    return (
      <View className='xxx'>
        <Text
          id='testId'
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Hello world!
          <br></br>
          {this.state.count}
        </Text>
      </View>
    );
  }
}
