import React  from 'react';
import GroceryList from '../GroceryList';
import styled from 'styled-components';

  function App() {
    return (
      <Wrapper>
        <GroceryList />
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: hsl(39deg 100% 50%);
`;

export default App;