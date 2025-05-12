import { useState } from "react";
import Swal from "sweetalert2";
import { useTaskStore } from "../stores";
import { TaskStatus } from "../interfaces";


interface Props{
    status: TaskStatus;
}


export const useTasks = ({status}: Props) => {
    
    const isDragging = useTaskStore(state => !!state.draggingTaskId);
      const onTaskDrop = useTaskStore(state => state.onTaskDrop);
      const addTask = useTaskStore(state => state.addTask);
      const [onDragOver, setOnDragOver] = useState(false);
    
    
      const handleAddTask  = async() => {
    
    
        const {isConfirmed, value} = await Swal.fire({
          title: 'Add Task',
          input: 'text',
          inputLabel: 'Task Title',
          inputPlaceholder: 'Enter task title',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!';
            }
          }
        });
        if (!isConfirmed) return;
    
    
        addTask(value, status);
      }
    
      const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOnDragOver(true);
      };
    
      const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOnDragOver(false);
      };
      const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOnDragOver(false);
        onTaskDrop(status);
      };

    return{
        //properties
        isDragging,

        //methods
        onDragOver,
        handleDrop,
        handleDragLeave,
        handleDragOver,
        handleAddTask,
    }
}