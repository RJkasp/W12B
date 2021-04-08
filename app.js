//global Variables
let myForm = document.getElementById('createPost');
let update = document.getElementById('update');
let deleteBtn = document.getElementById('deleteBtn');


// Make a POST request that creates a "post"
// https://jsonplaceholder.typicode.com/posts (Links to an external site.) is the endpoint for this action
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    //local variable
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xhr.setRequestHeader('content-type', 'application/json');
    //displays info in console when entered into input boxes
    let data = {
        userId: document.querySelector("input[name='userId']").value,
        title: document.querySelector("input[name='title']").value,
        body: document.querySelector('textarea').value
    }
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === 4 && xhr.status === 201){
            // If it succeeds, the user should be shown a success message
            document.write('Success');
            console.log(this.responseText);
        }
    })
    xhr.send(JSON.stringify(data));
})
    //can not get to work
   // This request can simply happen when the page loads 
   //Make a PATCH request that updates a "post"
update.addEventListener('click', function(){
      //local variable
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === 4 && xhr.status === 200){
        // If it succeeds, just console.log the response.    
            console.log(this.responseText);
        }
    })
    // https://jsonplaceholder.typicode.com/posts/1 (Links to an external site.) is an example endpoint for this action
    xhr.open("patch", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.send({
        body: "here the new body content of the post",
    });
})
// Make a DELETE request that deletes a "post"
deleteBtn.addEventListener('click', function(){
      //local variable
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === 4 && xhr.status === 200){
          // If it succeeds, just console.log the response.  
            console.log(this.responseText);
        }
    })
    // https://jsonplaceholder.typicode.com/posts/1 (Links to an external site.) is an example endpoint for this action
    xhr.open("delete", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.send();
})
// Make a GET request that grabs all "posts"
// Remember that with these new request types we get different HTTP status sent back on success! Use some console.log lines to figure out what the status being returned is, it should be 2xx
window.addEventListener('load', function(){
      //local variable
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let resp = JSON.parse(this.responseText);
           // If it succeeds, all the posts should display on the page somehow (think loop) 
            for(i = 0; i < resp.length; i++){
                //div connected in html to GET requests that grab all posts and displays it on the window (browser)
                document.querySelector('div').innerHTML += `<a style= "color: red;">title</a>:` + resp[i].title + `<br /><br /><br />`;
            }
        }
    })
    // https://jsonplaceholder.typicode.com/posts (Links to an external site.) is the endpoint for this action
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
})