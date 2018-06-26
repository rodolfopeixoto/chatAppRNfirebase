import FirebaseService from "../../services/firebase";

export const restoreSession = () => {
  return(dispatch) => {
    dispatch(sessionRestoring())
    
    let unsubscribe = FirebaseService.auth()
      .onAuthStateChanged( user => {
        if(user){
          dispatch(sessionSuccess(user))
          unsubscribe()
        }else{
          dispatch(sessionLogout())
          unsubscribe()
        }
      })
  }
}


export const loginUser = (email, password) => {
  return(dispatch) => {
    dispatch(sessionLoading())

    FirebaseService.auth()
      .signInWithEmailAndPassword(email, password)
      .catch( error => {
        dispatch(sessionError(error.message))
      })

    let unsubscribe = FirebaseService.auth()
      .onAuthStateChanged(user => {
        if(user){
          dispatch(sessionSuccess(user))
          unsubscribe()
        }
      })
  }
}

export const signupUser = (email, password) => {
  return (dispatch) => {
    dispatch(sessionLoading())

    FirebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch( error => {
        dispatch(sessionError(error.message));
      })

      let unsubscribe = FirebaseService.auth()
        .onAuthStateChanged( user => {
          if(user){
            dispatch(sessionSuccess(user))
            unsubscribe()
          }
        })
  }
}