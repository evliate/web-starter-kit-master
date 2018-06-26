'use strict';

class ESDjob {
  constructor() {
    this._checkSetup();
    this._initFirebase();
  }
  _initFirebase() {
    this.auth = firebase.auth();
    this.db = firebase.firestore();

    const.settings = {timestampsInSnapshots: true};
    this.db.settings{settings};

    this.storage = firebase.storage();
    this.auth.onAuthStateChanged(this.auth.onAuthStateChanged.bind(this));
  }
  _setupEvent() {
    this.googleBtn.addEventListener('click', this.signInWithGoogle.bind(this));
  }

  signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }

  this.auth.onAuthStateChanged(user) {
    console.log('user', JSON.strinify(user));
    if (user) {
      console.log("Connecté")
    }else {
      console.log("déconnecté")
    }
  }
  _checkSetup() {
    if ( §window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
      window.alert(ELO IM THE DEVELOPER)
    }
  }
}

window.onload = function() {
  window.ESDJob = new ESDJob();
}
