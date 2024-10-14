
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCNbOigX073RJrRWWUPE9tUH-52PJKcW4",
    authDomain: "dabl-95a47.firebaseapp.com",
    databaseURL: "https://dabl-95a47-default-rtdb.firebaseio.com",
    projectId: "dabl-95a47",
    storageBucket: "dabl-95a47.appspot.com",
    messagingSenderId: "1086495030772",
    appId: "1:1086495030772:web:9f81ef078a0758b18ccda1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const form = document.querySelector('#wordArtForm');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const name = document.querySelector('#name').value;
//   const message = document.querySelector('#message').value;
//   const textColor = document.querySelector('#textColor').value;

//   // Update the preview
//   const wordArtPreview = document.querySelector('#wordArtPreview');
//   wordArtPreview.innerHTML = `${name}: ${message}`;
//   wordArtPreview.style.color = textColor;
//   wordArtPreview.classList.remove('active');
//   setTimeout(() => wordArtPreview.classList.add('active'), 10);

//   // Save data to Firebase
//   app.database().ref('wordArt').push({
//     name: name,
//     message: message,
//     textColor: textColor
//   });
// });

// Display saved word art in the gallery
firebase.database().ref('Stories').on('child_added', function(snapshot) {
  const wordArt = snapshot.val();
  console.log(snapshot.val());
  const wordArtItem = document.createElement('div');
  wordArtItem.classList.add( 'text-center', 'word-art-item');
  wordArtItem.innerHTML = `

      <h3>${wordArt.name}   (${wordArt.age_range})</h3>

      ${wordArt.description}
      ${wordArt.age_range}

   
  `;
  document.querySelector('#wordArtGallery').appendChild(wordArtItem);
});