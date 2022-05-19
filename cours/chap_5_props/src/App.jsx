import React from 'react';
import Submitbutton from './Components/SubmitButton';
import User from './Components/User';

const App = () => {
  const user = [
    {
      id:1,
      name: 'zaib',
      age: 27,
      comment: {
        lastComment: 'Il y a du text !!!',
      },
    },
    {
      id:2,
      name: 'oli',
      age: 23,
      comment: {
        lastComment: 'Il y a du text oli !!!',
      },
    },
    {
      id:3,
      name: 'ben',
      age: 27,
      comment: {
        lastComment: 'Il y a du text ben !!!',
      },
    },
  ];
  const handleLauchRocket = () => {
    let cpt = 10;
    const intervalRocket = setInterval(() => {
      if (cpt === 0) {
        console.log('Lancement de la fusé');
        clearInterval(intervalRocket);
      } else {
        console.log(cpt);
      }
      cpt -= 1;
    }, 1000);
  };
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <header>
        <div>
          <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
              <Submitbutton onHandleClick={handleLauchRocket} />
              {/* <User name={user.name} age={user.age} comment={user.comment.lastComment} /> */}
              {user.map((u) => (
                <User
                  key={u.id}
                  name={u.name}
                  age={u.age}
                  comment={u.comment.lastComment}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
