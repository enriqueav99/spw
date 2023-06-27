export const environment = {
  production: true,
  //backendUrl : window['env']['BackendUrl'] || 'puesto en enviroments.ts',
  backendUrl : window['env'].BACKEND_URL ,
  firebaseConfig : {
    apiKey: "AIzaSyBadLEwiqEeCe8DrUkgkwVXg6waHEQ7sZw",
  authDomain: "appanguar.firebaseapp.com",
  projectId: "appanguar",
  storageBucket: "appanguar.appspot.com",
  messagingSenderId: "11546348541",
  appId: "1:11546348541:web:57085ed8eef8c383f66794"
  }

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
};
