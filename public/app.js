function getPostElement(post) {
    // Header
    const header = document.createElement("div")
    header.setAttribute("class", "post-header")

    const leftHeader = document.createElement("div")
    leftHeader.setAttribute("class", "post-header-left")

    const title = document.createElement("h3")
    title.innerHTML = post.title
    leftHeader.appendChild(title)
    
    const subTitle = document.createElement("h4")
    subTitle.innerHTML = post.subtitle
    leftHeader.appendChild(subTitle)
    
    const rightHeader = document.createElement("div")
    rightHeader.setAttribute("class", "post-header-right")

    const date = document.createElement("div")
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    date.innerHTML = new Date(Date.parse(post.createdAt)).toLocaleString('en-US', options)
    rightHeader.appendChild(date)

    header.appendChild(leftHeader)
    header.appendChild(rightHeader)

    // Body

    const body = document.createElement("div")
    body.setAttribute("class", "post-body")

    const abstract = document.createElement("p")
    abstract.innerHTML = post.abstract
    header.appendChild(abstract)

    if (post.thumbnailUrl?.length > 0) {
        const thumbnail = document.createElement("img")
        thumbnail.setAttribute("class", "post-img")
        thumbnail.setAttribute("src", post.thumbnailUrl)
        thumbnail.setAttribute("alt", post.thumbnailDescription)
        header.appendChild(thumbnail)
    }

    // Article

    const article = document.createElement("article")
    article.appendChild(header)
    article.appendChild(body)

    const link = document.createElement("a")
    link.setAttribute("href", post.url)
    link.appendChild(article)

    return link
}

fetch("https://blogback.timhuebener.com/posts")
    .then(res => res.json())
    .then(posts => {
        console.log(posts);

        const postsArea = document.getElementById("posts")

        posts.forEach(postData => {
            const post = getPostElement(postData)

            postsArea.appendChild(post)
        });
    })