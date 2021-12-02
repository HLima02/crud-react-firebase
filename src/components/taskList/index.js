import { toast } from 'react-toastify';
import { BiEdit, BiTaskX } from "react-icons/bi";
import {ContainerList} from './style';

export default function TaskList({taskList, handleDelete, handleEdit}){
  function editbutton(item){
    console.log('editando');
    handleEdit(item, true);
  }
  return(
    <ContainerList>
      {taskList.length > 0 &&
        <div>
          <h2>Minhas tarefas</h2>
          <ul>
            {taskList.map(item => {
              return(
                <li className="taskItem" key={item.id}>
                  <div>
                    <h3>{item.task}</h3>
                    <p>Responsável: {item.autor}</p>
                  </div>
                  <div className="btn-area">
                    <BiEdit className="edit" onClick={() => editbutton(item)} />
                    <BiTaskX className="exclude" onClick={() => handleDelete(item.id)}/>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </ContainerList>
  );
}