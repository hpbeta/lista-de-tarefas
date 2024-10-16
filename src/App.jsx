import { useState } from "react";
import { Container, ContainerList, Form, ListItem } from "./styles";
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  function addTask(e) {
    e.preventDefault();
    if(inputValue === '') {
      alert('Digite uma tarefa no campo')
      return
    }
    
    setTask([ ...task, 
       { 
        id: task.length,  
        name: inputValue,
        finished: false 
       }, 
      ]);
    setInputValue('')
  }

  function toggleFinished(index){
    const newArr = task.map((item, i) => (
      i === index ? {...item, finished: !item.finished} : item
    ))

    setTask(newArr)
  }

  function deleteTask(index) {
    const newArr = task.filter((_, item) => (
      item !== index
    ))
    setTask(newArr)
  }

  return (
    <Container>
      <h1>Lista de tarefas</h1>
      <Form>
        <input
          onChange={ (e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Digite sua tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </Form>

      <ContainerList>
        {task.map((item, index) => (
          <ListItem key={index} $finished={item.finished}>
            <IoMdCheckmark onClick={() => toggleFinished(index)} />
            {item.name}
            <MdDelete onClick={() => deleteTask(index)} />
          </ListItem>
        ))}
      </ContainerList>
    </Container>
  );
}

export default App;