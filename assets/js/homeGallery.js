var firebaseConfig = {
    apiKey: "AIzaSyBfi_sKcZ6ewaEgfb2YQEYsxWoqzErY0EU",
    authDomain: "hi-tech-223.firebaseapp.com",
    databaseURL: "https://hi-tech-223.firebaseio.com",
    projectId: "hi-tech-223",
    storageBucket: "hi-tech-223.appspot.com",
    messagingSenderId: "401994959902",
    appId: "1:401994959902:web:c99d240058ff0e5546f20f",
    measurementId: "G-NC2SMMN4DC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.firestore().collection('gallery').orderBy("timeStamp","desc").limit(6).onSnapshot(function (snapshot) {
    document.getElementById("getImg").innerHTML = '';
    snapshot.forEach(function (taskValue) {
        // console.log(taskValue.data())
        document.getElementById("getImg").innerHTML += `
            <div class="col-md-4 col-sm-4 col-xs-12 design development ">
            <div class="single-awesome-project">
              <div class="awesome-img">
                <a href="#"><img src="${taskValue.data().imgUrl}" alt="" /></a>
                <div class="add-actions text-center">
                  <div class="project-dec">
                    <a class="venobox" data-gall="myGallery" href="${taskValue.data().imgUrl}">
                      <h4>${taskValue.data().title}</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `
    })
})

function getGallery(category){
  // console.log(category)
    if(category == "all"){
      // console.log("if")
      firebase.firestore().collection('gallery').orderBy("timeStamp","desc").limit(6).onSnapshot(function (snapshot) {
        document.getElementById("getImg").innerHTML = '';
        snapshot.forEach(function (taskValue) {
            // console.log(taskValue.data())
            document.getElementById("getImg").innerHTML += `
                <div class="col-md-4 col-sm-4 col-xs-12 design development ">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#"><img src="${taskValue.data().imgUrl}" alt="" /></a>
                    <div class="add-actions text-center">
                      <div class="project-dec">
                        <a class="venobox" data-gall="myGallery" href="${taskValue.data().imgUrl}">
                          <h4>${taskValue.data().title}</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `
        })
    })
    }
    else
    {
      // console.log("else")
      firebase.firestore().collection('gallery').where("category","==",category).orderBy("timeStamp","desc").limit(6).onSnapshot(function (snapshot) {
        document.getElementById("getImg").innerHTML = '';
        snapshot.forEach(function (taskValue) {
            // console.log(taskValue.data())
            document.getElementById("getImg").innerHTML += `
                <div class="col-md-4 col-sm-4 col-xs-12 design development ">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#"><img src="${taskValue.data().imgUrl}" alt="" /></a>
                    <div class="add-actions text-center">
                      <div class="project-dec">
                        <a class="venobox" data-gall="myGallery" href="${taskValue.data().imgUrl}">
                          <h4>${taskValue.data().title}</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `
        })
    })
    }
}