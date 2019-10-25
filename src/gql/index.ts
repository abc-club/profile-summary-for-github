import { gql } from 'apollo-boost';

export const GETUSER = (username:string) => gql`
{
  user(login: "${username}") {
      login
      avatarUrl
      url
      email
      location
      websiteUrl
      bio
      status{
        message
      }
      createdAt
      followers(first: 100){
        totalCount
        nodes{
          id
          login
          avatarUrl
          url
        }
      }
      following(first: 100){
        totalCount
        nodes{
          id
          login
          avatarUrl
          url
        }
      }
      repositories(first : 10, isFork : false, orderBy: {direction: DESC, field: CREATED_AT }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          forkCount
          primaryLanguage{
            name
            color
          }
          stargazers (first : 10){
            totalCount
            nodes {
              name
            }
          }
          forks (first : 10){
            nodes {
              createdAt
              name
            }
          }
          url
        }
      }
    }
}
`;
