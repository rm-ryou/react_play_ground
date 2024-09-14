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
  try {
    const baseURL = setTodosURL();
    const response = await fetch(`${baseURL}/${params.id}`);
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error)
    }
    const resData = await response.json();

    return resData;
  } catch (error) {
    console.log('Error while fetching data: ', error);
    return null
  }
};

export { todosLoader, todoLoader };
