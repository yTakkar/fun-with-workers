export const getProfile =  username => {
  return new Promise((resolve, reject) => {
    fetch('https://api.github.com/users/' + username)
      .then(resp => resp.json())
      .then(resp => resolve(resp))
      .catch(e => reject(e))
  })
}