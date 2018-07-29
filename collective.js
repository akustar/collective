{
  fetch('./posts.json')
  .then(res => res.json())
  .then(posts => {
    let fragment = ''
    for (const post of posts) {
      fragment += (`
        <article class="ct-post" style="background-color: ${post.backgroundColor};color: ${post.fontColor}">
          <a href="${post.link}" target="_blank">
            <div class="thumb">
              <img src="${post.thumb}" alt="${post.title}">
            </div>
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <div class="tgas">
              ${(() => {
                let fragment = ''
                for (const tag of post.tags) {
                  fragment += `<button type="button">#${tag}</button> `
                }
                return fragment
              })()}
            </div>
            <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></g></svg></span>          
          </a>
        </article>
      `)
    }
    document.querySelector('.ct-main').innerHTML = fragment
  })
}