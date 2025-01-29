var posts=["posts/1243066710.html","posts/4234593951.html","posts/2710847249.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };