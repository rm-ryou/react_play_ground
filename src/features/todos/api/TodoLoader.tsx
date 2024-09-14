import { LoaderFunctionArgs } from 'react-router-dom';

const setTodosURL = (): string => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  return `${baseURL}/api/todos`;
};

const todosLoader = async () => {
  const baseURL = setTodosURL();
  const response = await fetch(baseURL);
  const resData = await response.json();

  return resData;
};

const todoLoader = async ({ params }: LoaderFunctionArgs) => {
  const baseURL = setTodosURL();
  const response = await fetch(`${baseURL}/${params.id}`);
  const resData = await response.json();

  return resData;
};

export { todosLoader, todoLoader };
