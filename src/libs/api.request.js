import HttpRequest from '@/libs/axios'

const handleError = (err) => {
  // Message.info(err)
  console.log(err)
}

const get = ({ url, data }) => {
  return new Promise((resolve, reject) => {
    HttpRequest.get(url, {
      params: data
    }).then(res => {
      resolve(res)
    }).catch(err => {
      handleError(err)
    })
  })
}

const post = ({
  url,
  data
}) => {
  return new Promise((resolve, reject) => {
    HttpRequest.post(url, data).then(res => {
      resolve(res)
    }).catch(err => {
      handleError(err)
    })
  })
}

const request = ({ methods, url, data }) => {
  if (methods.toLowerCase() === 'post') {
    return post({
      url,
      data
    })
  } else {
    return get({
      url,
      data
    })
  }
}

export default {
  request,
  get,
  post
}
