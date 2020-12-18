import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://rounak1812.pythonanywhere.com/`
  })
}
