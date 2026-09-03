import { test } from  '../utils/fixture.js'
import { expect } from "@playwright/test";


let authToken: string

test.beforeAll('Get Token',async({api})=>{
   const tokenResponse = await api
     .path('/users/login')  
     .body({"user":{"email":"revasingh9@yahoo.in","password":"Mall##ika30"}})   
     .postRequest(200) 
   authToken = `Token ${tokenResponse.user.token}`
  
})



test("Get Article",async({api})=>{

const response = await api
.path('/articles')
.params({limit:10, offset:0 })
.getRequest(200)
console.log(response)
expect(response.articles.length).toBeLessThanOrEqual(10)
expect(response.articlesCount).toEqual(10)



})

test('Get Test tags', async ({ api }) => {
       const response = await api 
            .path('/tags')
            .getRequest(200)
         expect(response.tags[0]).toEqual('Test')
         expect(response.tags.length).toBeLessThanOrEqual(10)
            

})

test('Create and Delete Article',async ({api}) =>{
     const uniqueTitle = `Test Six TEST ${Date.now()}`;
     const createArticleResponse = await api
     .path('/articles')
     .headers({Authorization : authToken})
     .body({"article": {"title":uniqueTitle,"description":"Test description","body":"Test body","tagList":[] }})
     .postRequest(201 )
     expect(createArticleResponse.article.title).toEqual(uniqueTitle)
     const slugId= createArticleResponse.article.slug

     const articleResponse = await api 
           .path('/articles')
           .headers({Authorization : authToken})
           .params({limit:10, offset:0 })
           .getRequest(200)
      expect(articleResponse.articles[0].title).toEqual(uniqueTitle)


      const deleteResponse = await api
           .path(`/articles/${slugId}`)
           .headers({Authorization : authToken})
           .deleteRequest(204)

           const articleResponseTwo = await api 
           .path('/articles')
           .headers({Authorization : authToken})
           .params({limit:10, offset:0 })
           .getRequest(200)
      expect(articleResponseTwo.articles[0].title).not.toEqual(uniqueTitle)


 })

 test('Create,Update and Delete Article',async ({api}) =>{
     const uniqueTitle = `Test Title ${Date.now()}`

     const updatedUniqueTitle = `Updated Test Seven TEST ${Date.now()}`
     const createArticleResponse = await api
     .path('/articles')
     .headers({Authorization : authToken})
     .body({"article": {"title":uniqueTitle,"description":"Test description","body":"Test body","tagList":[] }})
     .postRequest(201)
     expect(createArticleResponse.article.title).toEqual(uniqueTitle)
     const slugId= createArticleResponse.article.slug


     const updatedArticleResponse = await api
     .path(`/articles/${slugId}`)
     .headers({Authorization : authToken})
     .body({"article": {"title":updatedUniqueTitle,"description":"Test description","body":"Test body","tagList":[] }})
     .putRequest(200)
     expect(updatedArticleResponse.article.title).toEqual(updatedUniqueTitle)
     const newslugId= updatedArticleResponse.article.slug

     const articleResponse = await api 
           .path('/articles')
           .headers({Authorization : authToken})
           .params({limit:10, offset:0 })
           .getRequest(200)
      expect(articleResponse.articles[0].title).toEqual(updatedUniqueTitle)


   await api
           .path(`/articles/${newslugId}`)
           .headers({Authorization : authToken})
           .deleteRequest(204)

           const articleResponseTwo = await api 
           .path('/articles')
           .headers({Authorization : authToken})
           .params({limit:10, offset:0 })
           .getRequest(200)
      expect(articleResponseTwo.articles[0].title).not.toEqual(updatedUniqueTitle)


 })