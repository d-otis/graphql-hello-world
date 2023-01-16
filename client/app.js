const GRAPHQL_URL = "http://localhost:4000/";

console.log(GRAPHQL_URL);

const msg = document.getElementById("message");
msg.innerText = "Loading...";

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data;
}

fetchGreeting().then(({ greeting }) => {
  msg.innerText = greeting;
});
