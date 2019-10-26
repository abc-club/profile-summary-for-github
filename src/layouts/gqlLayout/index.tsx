import React, { PureComponent } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, useQuery, } from '@apollo/react-hooks';
import {withRouter, RouteComponentProps} from "react-router-dom";

type IProps = RouteComponentProps & {}
interface IStates {
  client: any
}

@withRouter
class GqlLayout extends PureComponent<IProps, IStates> {
  constructor(props: IProps) {
    super(props)
    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      headers: {
        Authorization: `bearer ${props.location.query.token}`
      }
    });
    this.state = {
      client,
    }
  }

  render() {
    const {client} = this.state
    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    );
  }
}

export default GqlLayout;
