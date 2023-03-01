const API_KEY = "d-HnLlIjn_Q4SC7g7Fgb98zl14BSv01sxJuzEvshjmy7CIvvCX2P3zlucCxMj-kvhpSCVQdBA8XZ6cOsGSEli4ym8xZMa2NT8SrECMCX37JaDQMcf4KQ9xDV7H__Y3Yx";

export const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers : {
                AuthoriZation : `Bearer ${API_KEY}`
            }
        }).then(res => res.json())
          .then(res => {
            if(res.businesses){
                return res.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
                
    }
}
