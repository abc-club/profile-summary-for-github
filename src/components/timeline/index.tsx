import React from 'react';
import styles from './style.css';
import { connect } from "dva";
import { ConnectProps, ConnectState } from '@/models/connect';
import { Dispatch } from 'redux';
import { drawContributions } from "github-contributions-canvas";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

export interface HomeProps extends ConnectProps {
  commitData: any;
  loading: boolean;
  dispatch: Dispatch;
  username: string;
}

interface HomeStates {
}

@connect(({ loading, app }: ConnectState) => ({
  loading,
  commitData: app.commitData,
}))
class Home extends React.Component<HomeProps, HomeStates> {
  canvas: null;

  constructor(props: HomeProps) {
    super(props)
  }
  async componentDidMount() {
    let { username} = this.props
    await this.props.dispatch({
      type: 'app/setCommitDataAction',
      user: username
    });
    this.draw()
  }

  draw() {
    if (!this.canvas) {
      return this.setState({
        error: "Something went wrong... Check back later."
      });
    }
    let data = JSON.parse(JSON.stringify(this.props.commitData))
    // 只取最近一年
    data.years = [data.years[0]]
    drawContributions(this.canvas, {
      data,
      username: this.props.username,
      themeName: 'standard',
      footerText: ""
    });
  }

  render() {
    const cols = {
      total: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };

    return (
      <div className={styles.content}>
        {/* line-basic */}
        <div>
          <Chart height={400} data={this.props.commitData.years} scale={cols} forceFit={true}>
            <Axis name="year" />
            <Axis name="total" />
            <Tooltip
              crosshairs={{ type: "y" }}
            />
            <Geom type="line" position="year*total" size={2} />
            <Geom
              type="point"
              position="year*total"
              size={4}
              shape={"circle"}
              style={{ stroke: "#fff", lineWidth: 1 }}
            />
          </Chart>
        </div>
        <hr/>
        <canvas ref={el => (this.canvas = el)} />
      </div>
    )
  }
}

export default Home
