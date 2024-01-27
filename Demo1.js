//with out async await
const returnResult  = fetch("https://jsonplaceholder.typicode.com/todos/1")
                .then(result => result.json())
                .then(result=>console.log(result.userId));



                returnResult  // this will always be promise beacuse then will return promise only




//With async await

async function  PrintuserId()   // return type of async funtion will be promise here it will be promise<void>
{
   const res =  await fetch("https://jsonplaceholder.typicode.com/todos/1"); //await will resolve promise and give result
   data = await res.json();
   console.log(data.userId)    
}

PrintuserId();

