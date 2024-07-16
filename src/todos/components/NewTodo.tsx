'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoTrashOutline } from 'react-icons/io5';

// import * as todosApi from '../helpers/todo';
import { addTodoAction, deleteTodosCompletedAction } from '../actions';

export const NewTodo = () => {
  const [description, setDescription] = useState('');
  const router = useRouter();

  // const createTodo = async () => {
  //   const todo = await todosApi.createTodo(description);
  //   console.log(todo);
  // };

  // const deleteCompleted = async () => {
  //   await todosApi.deleteTodos();
  //   router.refresh();
  // };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) {
      return;
    }
    // await createTodo();
    await addTodoAction(description)
    setDescription('');
    // router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className='flex w-full'>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all'
        placeholder='¿What do you need to be today?'
      />

      <button
        type='submit'
        className='flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all'
      >
        Create
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => deleteTodosCompletedAction()}
        type='button'
        className='flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all'
      >
        <IoTrashOutline />
        <span className='ml-2'>Delete Completed</span>
      </button>
    </form>
  );
};
