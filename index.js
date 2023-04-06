const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerEl = document.getElementById("container")

function render(){
    let string = ""
    for( let i = 0; i < posts.length; i++){
        string += ` <section>
                        <div class="sender">
                            <img src="${posts[i].avatar}" class="avatar">
                            <div class="sender-info">
                                <p class="bold">${posts[i].name}</p>
                                <p>${posts[i].location}</p>
                            </div>
                        </div>
                        <img src="${posts[i].post}" class="post">
                        <div class="buttons">
                            <img class="btn heart-icon" src="images/icon-heart.png">
                            <img class="btn " src="images/icon-comment.png">
                            <img class="btn " src="images/icon-dm.png">
                        </div>
                        <div class="interactions">
                            <p class="bold">${posts[i].likes} likes</p>
                            <p><span class="bold">${posts[i].username}</span>  ${posts[i].comment}</p>
                        </div>
                    </section>`       
    }
    containerEl.innerHTML = string
    update()
}

function update(){
    const collectionPost = document.getElementsByClassName("post")
    
    for( let i = 0; i < posts.length; i++){
        collectionPost[i].addEventListener("dblclick",function(){
            posts[i].likes += 1
            render()
    })   
    }
}

render()