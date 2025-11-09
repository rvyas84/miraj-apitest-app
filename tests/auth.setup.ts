import {test as setup, request} from '@playwright/test'
import user from '../.auth/userCred.json'
import fs from 'fs'

const authFile = '.auth/userCred.json'

setup('authentications', async({request})=> {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user": {
                "email": "username",
                "password": "password"
            }
        }
    })

  const responseBody = await response.json()
  const accessToken = responseBody.user.token
  user.origins[0].localStorage[0].value = accessToken
  fs.writeFileSync(authFile, JSON.stringify(user))

  process.env['ACCESS_TOKEN'] = accessToken
})