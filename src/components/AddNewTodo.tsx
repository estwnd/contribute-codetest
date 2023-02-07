import { Box, Button, TextField } from "@mui/material"
import React, { useRef } from "react"

interface AddNewTodoProps {
  submitNewTodo: (textValue: string) => void
}
const AddNewTodo = ({submitNewTodo}: AddNewTodoProps) => {
  const todoInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const todoValue = todoInputRef.current!.value
    if(todoValue.trim().length === 0){
      return
    }
    submitNewTodo(todoValue)
    todoInputRef.current!.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{display: "flex" ,justifyContent:"space-between" }}>
        <TextField variant="standard" type="text" inputRef={todoInputRef} autoFocus={true} sx={{flexGrow: 1, marginRight: "10px"}}/>
        <Button type="submit" variant="outlined" sx={{flexShrink: 0}}>Add</Button>
      </Box>
    </form>
  )
}
export default AddNewTodo