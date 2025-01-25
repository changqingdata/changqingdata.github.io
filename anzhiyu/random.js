var posts=["2024/12/03/hello-world/","2025/01/17/万字干货！手把手带你根除手机&短视频成瘾？ - 副本 - 副本/","2025/01/17/万字干货！手把手带你根除手机&短视频成瘾？ - 副本/","2024/12/16/万字干货！手把手带你根除手机&短视频成瘾？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };