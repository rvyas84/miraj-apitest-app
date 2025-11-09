import { test, expect, request } from '@playwright/test';
import tags from '../test-data/tags.json'

// test.beforeEach('Visit Home Web Page', async({page}) => {
  
//   //intercepts tags api resonse
//   await page.route('*/**/api/tags', async route => {
//     await route.fulfill({
//       body: JSON.stringify(tags)
//     })
//   })

//   await page.goto('https://conduit.bondaracademy.com/')
// })

test('has title', async({page}) => {
   //intercepts articles api resonse
   await page.route('*/**/api/articles*', async route => {
    const interceptResponse = await route.fetch()
    const responseBody = await interceptResponse.json()
    responseBody.articles[0].title = "This is a MOCK test title"
    responseBody.articles[0].description = "This is a MOCK test description"

    await route.fulfill({
      body: JSON.stringify(responseBody)
    })
  })

  await expect(page.locator('.navbar-brand')).toHaveText('conduit')
  await expect(page.locator('app-article-list h1').first()).toContainText('This is a MOCK test title')
  await expect(page.locator('app-article-list p').first()).toContainText('This is a MOCK test description')
});

test('POST GET DELET API Calls', async({page, request}) => {

  //Create Article - POST
  const createArticleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: {
        "article": {
          "title": "Test Title",
          "description": "Test Description",
          "body": "Test Body",
          "tagList": [
            "Test Tag"
          ]
        }
      }
  })

  const responseBody1 = await createArticleResponse.json()
  console.log(responseBody1)
  expect(createArticleResponse.status()).toEqual(201)

  const slugID = await responseBody1.article.slug

  await page.waitForTimeout(2000)

  //Retrieve Articel - GET
  const getArticleResponse = await request.get(`https://conduit-api.bondaracademy.com/api/articles/${slugID}`)
  console.log(getArticleResponse.status())
  expect(getArticleResponse.status()).toEqual(200)

  await page.waitForTimeout(2000)

  // DELETE Article - DELETE
  const deleteArticleResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugID}`)
  console.log(deleteArticleResponse.status())
  expect(deleteArticleResponse.status()).toEqual(204)
})