import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Todo } from "../types/model"

interface TodoItemProps {
  todo: Todo
  handleCompleteTodo: (id:string) => void
  handleRemoveTodo: (id:string) => void
}

const TodoItem = ({todo, handleCompleteTodo, handleRemoveTodo}: TodoItemProps) => {

  return (
    <ListItem alignItems="center"  secondaryAction={
    <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTodo(todo.id)}>
       <ClearRoundedIcon/>
      </IconButton>
    }>
      <ListItemButton disabled={todo.completed} onClick={() => handleCompleteTodo(todo.id)}>
        <ListItemIcon>
          <Checkbox edge="start" checked={todo.completed} disabled={todo.completed} inputProps={{ 'aria-labelledby': todo.id }} disableRipple />
        </ListItemIcon>
        <ListItemText id={todo.id} primary={todo.value} />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoItem