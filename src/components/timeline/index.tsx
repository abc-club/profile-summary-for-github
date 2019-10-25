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
    drawContributions(this.canvas, {
      data: this.props.commitData,
      username: this.props.username,
      themeName: 'standard',
      footerText: ""
    });
  }

  render() {
    return (
      <div className={styles.content}>
        <canvas ref={el => (this.canvas = el)} />
      </div>
    )
  }
}

export default Home
