liff.init({
    liffId: '1653571695-gOjprRLE'
})
.then(() => {
    // start to use LIFF's api
    initializeApp();
})
.catch((err) => {
    //document.getElementById("liffAppContent").classList.add('hidden');
    //document.getElementById("liffInitErrorMessage").classList.remove('hidden');
});