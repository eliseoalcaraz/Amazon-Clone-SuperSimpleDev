const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

const exerciseNew = new XMLHttpRequest();

exerciseNew.addEventListener('load', () => {
  console.log(exerciseNew.response);
});


exerciseNew.open('GET', 'https://supersimplebackend.dev/greeting');
exerciseNew.send();


function fetchGreeting() {
  const promise = fetch('https://supersimplebackend.dev/greeting').then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
  });

  return promise;
}

//fetchGreeting();

async function greetingAwait() {
  const response = await fetch('https://supersimplebackend.dev/greeting');
  const text = await response.text();

  console.log(text);
}
//greetingAwait();


async function postGreeting() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Eliseo'
    })
  });

  const text = await response.text();
  console.log(text);
}

//postGreeting();



//practice
async function amazonGreeting() {
  try {
    const response = await fetch('https://amazon.com');
    const text = await response.text();

    console.log(text);

  } catch (error) {
    console.log('CORS error. Your request was blocked by the backend');
  }
}

//amazonGreeting();

async function postGreet() {
  try {
    const response = await fetch('https://supersimplebackend.dev', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json'
      }
     });

     if (response.status >= 400) {
      throw response;
     }

     const text = await response.text();
     console.log(text);

  } catch (error) {
    if(error.status === 400) {
      const errorMessage = await error.json();
      console.log(errorMessage);
    } else {
      console.log('Network error. Please try again later.');
    }
  }
}

//postGreet();
