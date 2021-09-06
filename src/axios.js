import axios from "axios"

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/clone-c9231/us-central1/api",
})

export default instance
