import React from 'react';
import {gql, useQuery} from 'urql';

const PROFILE_QUERY = gql`
  query Profile {
    me {
      id
      username
      createdAt
    }
  }
`;


const Toggled = () => {
  const [result] = useQuery({query: PROFILE_QUERY});

  const {data, fetching, error} = result;

  return (
    <div>
      {fetching && <p>Loading...</p>}

      {error && <p>Oh no... {error.message}</p>}

      {data?.me && (
        <>
          <p>profile data</p>
          <p>id: {data.me.id}</p>
          <p>username: {data.me.username}</p>
        </>
      )}
    </div>
  );
}

const Profile = () => {
  const [toggled, setToggled] = React.useState(false);
  return toggled ? <Toggled/> : <button onClick={() => setToggled(true)}>Toggle</button>;
};

export default Profile;
