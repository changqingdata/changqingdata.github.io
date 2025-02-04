var posts=["posts/2710847249.html","posts/4234593951.html","posts/2699038967.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };