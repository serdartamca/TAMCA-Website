from firebase import firebase

# Initialize the Firebase SDK.
firebase.initializeApp({
    apiKey: "AIzaSyDDWF7ZTpiUySdlvdrckwFLhuhVItEtYzc",
    authDomain: "tamca-32b6f.firebaseapp.com",
    databaseURL: "https://tamca-32b6f-default-rtdb.firebaseio.com",
    projectId: "tamca-32b6f",
    storageBucket: "tamca-32b6f.appspot.com",
    messagingSenderId: "270078571509",
    appId: "1:270078571509:web:91877bf478b18ecfa2e6bc",
    measurementId: "G-9L44SWFGJ8"
})

# Get a reference to the Firebase Realtime Database.
database = firebase.database()

# Create a new contact object.
contact = {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890"
}

# Write the contact object to the database.
database.ref('contacts').push(contact)

# Close the Firebase connection.
firebase.auth.signOut()