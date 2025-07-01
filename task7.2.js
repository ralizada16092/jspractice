let arr = new Array();

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((res) => res.json())
  .then((data) => {
    const emails = [];
    for (var i = 0; i < data.length; i++) {
      emails.push(data[i].email);
    }
    arr.push({ commentEmails: emails });
  })
  .catch((err) => console.error(err));

console.log(arr);
