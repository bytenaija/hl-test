-# Homelike server for assignment

## Background information

###run
- edit /config/default.json
- provide mongodb connection path [mongodb://localhost:27017/assignment by default]
- npm install
- npm start

###current endpoints
- `/users`
- `/apartments`
- `/locations`
- `/graphql`
- `/graphiql`

##What to do - for backend engineers
1. add new endpoint /countries which should represent the data from the `countries` collection
1. add `countries` to /graphql endpoint
1. add `country` to `locations.graphql.schema` as a representative of `country` information
1. add functionality to use `limit` and `skip` as a parameters to fetch data through `/graphql` endpoint
1. If you run the following query, location will always be `null`. Please figure out why this is happening.
After you found out how this happens, please describe the reason and how you found the issue. 
```query RootQuery($owner: String) {  
      apartments(owner: $owner) {  
        items {  
          location {  
            title  
          }  
        }  
      }  
    }
```  

## Why the query is returning null
 -> Why querying the apartment services, the Location Service returns null. I found out if change line 12 in apartments/ apartments.resolvers.js from
     return Locations.find({query: { _id: apartment.location } }).then(result=>result[0]);
  to
     return Locations.find({ _id: apartment.location } ).then(result=>result[0]);
  
  resolves the issue. I found this issue after checking the mongodb client documentation and some online research without discovering anything there. I decided to use my experience of mongoose query to try it out and that is when I got the solution. I have also researched the reasons for many hours and have not been able to come out with one.


