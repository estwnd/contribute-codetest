
import { Badge, List, Tab, Tabs } from "@mui/material"
import React, { useMemo, useState } from "react"
import { Todo } from "../types/model"
import TabPanel from "./Tabs/TabPanel"
import TodoItem from "./TodoItem"
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { Box } from "@mui/system"

interface TodoListProps {
  todos: Todo[]
  handleCompleteTodo: (id:string) => void
  handleRemoveTodo: (id:string) => void
}

const TodoList = ({todos, handleCompleteTodo, handleRemoveTodo}: TodoListProps) => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabToggle = (e:React.SyntheticEvent, newTabValue:number) => {
    setTabValue(newTabValue)
  }

  const activeTodos = useMemo(() => {
    return todos.filter((todo) => !todo.completed )
  },[todos])

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed )
  },[todos])

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabToggle} centered>
        <Tab label="Active"/>
        <Tab label={ completedTodos.length ? (<Badge color="primary" variant="dot"> Completed </Badge>) : "Completed" } />
        <Tab label="All" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        {activeTodos.length ? (
          <List dense sx={{ width: '100%',  }}>  
            {activeTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo} handleRemoveTodo={handleRemoveTodo}/>
            ))}
          </List>
          ) : 
          (
            <Box sx={{width: "100%",display: "flex", justifyContent: 'center'}}>
              <WbSunnyRoundedIcon  sx={{color: 'lightgrey', fontSize: '50px'}}/>
            </Box>
          ) 
        }
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <List dense>
          {completedTodos && completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo} handleRemoveTodo={handleRemoveTodo}/>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <List dense>
          {todos && todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo} handleRemoveTodo={handleRemoveTodo}/>
          ))}
        </List>
      </TabPanel>
    </>
  )
}

export default TodoList