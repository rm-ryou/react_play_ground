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

export { todosLoader };
