import { View, Canvas ,Image} from "@tarojs/components";
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Index extends Component {
  private ctx;

  onReady() {
    this.ctx = Taro.createCanvasContext("image-cropper");
    this.ctx.setFillStyle("red");
    this.ctx.fillRect(0, 0, 100, 100);
    this.ctx.draw(false, () => {
      console.log("call back");
    });
  }

  render() {
    return (
      <View>
        <Canvas
          canvasId='image-cropper'
          disable-scroll='true'
          style='width: 100px;height:100px'
          className='image-cropper-canvas'
        />
      </View>
    );
  }
}
