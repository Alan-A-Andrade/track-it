
export default function persistentLogIn() {

  if (localStorage.getItem("userInfo") !== null) {

    const tokenOnLocalStorage = JSON.parse(localStorage.getItem("userInfo"));

    return (tokenOnLocalStorage)

  }

  else {

    return false
  }

}