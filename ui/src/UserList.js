import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './UserList.css';

const UserList = () => (
  <Query
    query={gql`
      {
        users(first: 10) {
          name
          avgStars
          friends {
           name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      // return (
      //     <div className="UserList">
      //     <h1>Users:</h1>
      //   <ul>
      //     {data.users.map(({name}, i) => (
      //     <li key={i}>{name}</li>
      //     ))}
      //   </ul>
      //   </div>
      // );
      return (
          <div className="UserList">
          <h1>Users:</h1>
        <ul>
          {data.users.map(({name, avgStars, friends}, i) => (
          <li key={i}><strong>{name}</strong>: score - {avgStars} y amigo de {friends[0].name}</li>
          ))}
        </ul>
        </div>
      );
    }}
  </Query>
);

export default UserList;
