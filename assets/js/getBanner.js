firebase.firestore().collection('banner').onSnapshot(function(snapshot){
    document.getElementById("ensign-nivoslider").innerHTML='';
    snapshot.forEach(function(taskValue){
        console.log(taskValue.data())
        document.getElementById("ensign-nivoslider").innerHTML+=`
            <img src="${taskValue.data().imgUrl}" alt="" />
        `
    })
})