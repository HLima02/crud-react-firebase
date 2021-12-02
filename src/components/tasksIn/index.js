import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import {InputContainer} from './style';
import { AiFillPlusCircle } from "react-icons/ai";

export default function TaskIn({addTask, isEditing, setIsEditing, editItem}){
  const [task, setTask] = useState('');
  const [author, setAuthor] = useState('');
  
  function handleAddTask(){
    if(task !== '' && author !== ''){
      if(isEditing){
        addTask(task, author, editItem);
        setIsEditing(false);
      } else {
        addTask(task, author);
      }
      setTask('');
      setAuthor('');
    } else alert('Ops, algum dos campos esta vazio.');
  }
  
  useEffect(() => {
    function editing(){
      if(isEditing) {
        setTask(editItem.task);
        setAuthor(editItem.autor);
      }
    }
    editing();
  }, [isEditing]);

  return(
    <InputContainer>
      <h1>Adicionar tarefas</h1>

      <div className="input-area">
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="digite uma tarefa"/> <br/>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="responsavel"/><br/>
        <AiFillPlusCircle className="add-btn" onClick={() => handleAddTask() }/>
      </div>
      
    </InputContainer>
  );
}