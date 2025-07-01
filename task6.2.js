let arr = new Array();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      arr.push({ title: data[i].title, body: data[i].body });
    }
  })
  .catch((err) => console.error(err));

console.log(arr);
