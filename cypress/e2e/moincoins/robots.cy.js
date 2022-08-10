describe("Moincoins", ()=>{

  it("Robot.txt", function(){
      
   
      cy.request({
          method: 'GET', 
          url: 'https://moincoins.com/robots.txt'

          })
          
          .then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.not.null;
            expect(response.body).to.be.a('string');
            expect(response.body).to.eq('User-agent: *\n\nDisallow: */trafficback$\nDisallow: */callback$\nDisallow: */my-account\nDisallow: */mein-konto\nDisallow: */user-delete/*\nDisallow: */verification/*\nDisallow: */reset-password/*\nSitemap: https://moincoins.com/sitemap_index.xml');

          })
        })
      })