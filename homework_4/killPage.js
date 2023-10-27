const killPage = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1");
  await killPage();
};

killPage();
