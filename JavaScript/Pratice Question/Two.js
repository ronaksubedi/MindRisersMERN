const profile = {
    FullName: "Ronak Subedi",
    isFollow: true,
    post: 0,
    followers: 76,
    following: 57,
    bio: "On the road to sucess, you'll realize something hard to accept --not everyone is meant to go with you.",
    links: {ronaksubedi: "ronaksubedi.com.np"},
    };
    document.querySelector("#profile").innerHTML = 
    `Name: ${profile.FullName} <br>
     Follow: ${profile.isFollow} <br>
     Post: ${profile.post} <br>
     Followers: ${profile.followers} <br>
     Following: ${profile.following} <br>
        Bio: ${profile.bio} <br>
        Links: ${profile.links.ronaksubedi}`;

    // console.log(`Name: ${profile.FullName}
    //      Follow: ${profile.isFollow} 
    //      Post: ${profile.post} 
    //      Followers: ${profile.followers} 
    //      Following: ${profile.following} 
    //      Bio: ${profile.bio} 
    //      Links: ${profile.links.ronaksubedi}`);