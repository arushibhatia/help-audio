function textContacts() {
  fetch("https://textbelt.com/text", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: "9195790432",
      message: "Hello world",
      key: "4722fe44d79de99464d8437aea8875e7154670fboiE5L1hQg6rwtgWJLJrcWX3iz",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
