let arr = new Array();

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((res) => res.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      arr.push(data[i].email);
    }
  })
  .catch((err) => console.error(err));

console.log(arr);
