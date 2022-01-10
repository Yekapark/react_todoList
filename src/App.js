import './App.css';
import InputBox from './components/InputBox';
import HeaderTab from './components/HeaderTab'
import React, { useState } from 'react';
import swal from 'sweetalert';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {

  const [todoList, setTodoList] = useState([{id: 1, text: '1번', status:'com'},
                    {id: 2, text: '2번', status:'com'},
                    {id: 3, text: '3번', status:'com'},
                    {id: 4, text: '4번', status:'com'}])

                    
  function changeTodoList(id_1, status, inputText) {
    if(status === 'delete') {
      swal({
        title: "삭제하시겠습니까?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("삭제되었습니다.", {
            icon: "success",
          })
          setTodoList(todoList.filter(todo => todo.id !== id_1))
        }
      })
    } else if (status === 'add') {
      if(inputText === '') {
        swal("에러!", "텍스트가 비었습니다.", "error")
      } else {
        setTodoList([...todoList, {id: id_1, text:inputText, status:'com'}])
      }
    }
  }

  return (
    <BrowserRouter>
      <HeaderTab/>
      <Switch>
        <Route exact path='/'>
          {/* <div> */}
            { todoList.map(todo => <InputBox key={todo.id} id={todo.id} text={todo.text} status={todo.status} changeTodoList={changeTodoList}/>) }
            <InputBox key={todoList.length+1} id={todoList.length+1} text='' status='add' changeTodoList={changeTodoList}></InputBox>
          {/* </div> */}
        </Route>
        <Route path='/hi'>
          {/* <div> */}
            hi
          {/* </div> */}
        </Route>
        <Route path='/hello'>
          {/* <div> */}
            hello
          {/* </div> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App