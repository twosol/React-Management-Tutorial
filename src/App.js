import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '잠',
    'birthday': '920101',
    'gender': '남자',
    'job': '대통령'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '온',
    'birthday': '920202',
    'gender': '남자',
    'job': '총리'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '다',
    'birthday': '920303',
    'gender': '남자',
    'job': '장관'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
