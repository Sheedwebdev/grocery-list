import React  from 'react';
import styled, {keyframes} from 'styled-components';

  function GroceryList() {
    const [newItem, setNewItem] = React.useState("");
    const [items, setItems] = React.useState([]);
    const id = React.useId();

    const handleAdd  = function(e) {
      e.preventDefault();
      if (!newItem.trim()) return;
      setItems([...items, {grocery: newItem, added: false}]);
      setNewItem("");
    }

    const handleRemove = function(indexToRemove) {
      const updatedItems = items.filter((_, index) => index !== indexToRemove);
      setItems(updatedItems);
    }

    return (
      <>
        <Form onSubmit={handleAdd}>
          <Fieldset>
            <Legend>Grocery List</Legend>
            {items.map((item, index) => (
              <Container key={index}>
                <Checkbox 
                  type='checkbox'
                  value={item.grocery}
                  id={`${id}-${index}`}
                  checked={item.added}
                  onChange={() => {
                    const updatedItems = [...items];
                    updatedItems[index].added = !updatedItems[index].added;
                    setItems(updatedItems);
                  }}
                />
                <Label added={item.added} htmlFor={`${id}-${index}`}>{item.grocery}</Label>
                <RemoveButton type='button' onClick={() => handleRemove(index)}>❌</RemoveButton>
              </Container>
            ))}
            <TextInput>
              <input 
                type='text'
                value={newItem}
                onChange={(e) => (
                  setNewItem(e.target.value)
                )}
                placeholder='Enter grocery item'
              />
              <AddButton type='submit'>Add</AddButton>
            </TextInput>
          </Fieldset>
        </Form>
      </>
    );
  }

  const fadeSlide = keyframes`
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0.4;
      transform: translateX(25px);
    }
  `

  const AddButton = styled.button`
    background-color: hsl(39deg 100% 50%);
    
    &:hover {
      background-color: hsl(0deg 0% 0%);
      color: hsl(0deg 0% 100%);
    }
  `;

  const RemoveButton = styled.button`
    background-color: hsl(0deg 0% 100%);
    
    &:hover {
      background-color: hsl(0deg 0% 66%);
      color: hsl(0deg 0% 100%);
    }
  `;

  const TextInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const Checkbox = styled.input`
    width: 1.25rem;
    height: 1.25rem;
  `;

  const Label = styled.label`
    font-size: 1.25rem;
    font-weight: 450;
    cursor: pointer;
    color: ${({ added }) => (added
       ? "hsl(0deg 0% 55%)" 
       : "hsl(0deg 0% 0%)")};
    text-decoration: ${({ added }) => (added
       ? "line-through" 
       : "none")};
    animation: ${({ added }) => (added
       ? fadeSlide
       : "none"
    )} 0.4s ease forwards;
  `;

 
 const Legend = styled.legend`
    font-size: 1.5rem;
    font-weight: 600;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  `;

  const Fieldset = styled.fieldset`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  `;

  const Form = styled.form`
    display: flex;
    gap: 15px;
    height: 500px;
    width: 500px;
    background: hsl(0deg 0% 100%);;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%); */
  `;

export default GroceryList;