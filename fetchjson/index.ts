import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The TO DO with ID ${id}
  Has title of ${title}
  Is it finished? ${completed}
  `);
};

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const { id } = todo;
  const { title } = todo;
  const { completed } = todo;

  logTodo(id, title, completed);
});

// type annotation
let apple: number = 5;

apple = 10;

let number = 12;
number -= 1;
const now: Date = new Date();

const colors: string[] = ['brown', 'blue'];

class Car {}
const car: Car = new Car();

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const lognumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const Profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lgn: 0,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = Profile;
const {
  coords: { lat, lgn },
}: { coords: { lat: number; lgn: number } } = Profile;

type Drink = [string, number];
