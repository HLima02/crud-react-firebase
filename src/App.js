import { useState, useEffect } from 'react'
import TaskIn from './components/tasksIn';
import TaskList from './components/taskList';
import { Container } from './style';
import firebase from './firebaseConnection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App(){
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    async function LoadTasks(){
      await firebase.firestore().collection('tarefas')
      .onSnapshot((doc) => {
        let minhasTarefas = [];
        doc.forEach(item => {
          minhasTarefas.push({
            id: item.id,
            task: item.data().task,
            autor: item.data().autor
          })
        });
        setTaskList(minhasTarefas);
      })
    }
    LoadTasks();
  }, []);

  //Verifica se o modo edição esta ativado, caso esteja irá atualizar o item do id passado, pelo contrario 
  //irá adicionar uma tarefa na lista
  async function getList(tarefa, autor, item){
    if(!isEditing){
      await firebase.firestore().collection('tarefas')
      .add({
        task: tarefa,
        autor: autor
      })
      .then(() => toast.success('Lista adicionada com sucesso'))
      .catch(err => toast.error('Houve um erro ao adicionar a tarefa'));
    } else {
      await firebase.firestore().collection('tarefas')
      .doc(item.id).update({
        task: tarefa,
        autor: autor
      })
      .then(() => toast.success('Item Atualizado com sucesso'))
      .catch(err => toast.error('Houve um erro ao atualizar o item'));
    }
  }

  //Deleta um item a lista
  async function handleDelete(id){
    await firebase.firestore().collection('tarefas').doc(id).delete()
    .then(() => toast.success('Item excuido com sucesso'))
    .catch(() => toast.error('Erro ao tentar excluir o item'));
  }

  //Manipula o modo de edição
  async function handleEdit(item, val){
    setIsEditing(val);
    setEditItem(item);
  }
  
  return(
    <Container>
      <TaskIn  addTask={getList} isEditing={isEditing} setIsEditing={setIsEditing} editItem={editItem} />
      <TaskList taskList={taskList} handleDelete={handleDelete} handleEdit={handleEdit} />
      <ToastContainer autoClose={2500} />
    </Container>
  );
}
