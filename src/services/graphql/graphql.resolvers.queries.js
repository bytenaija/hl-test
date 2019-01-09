let _ = require('lodash')
export default function(Query, Service, GetServiceName, FindServiceName) {
 
  Object.assign(Query, {
    [`${GetServiceName}`]: (root, args, context) => {
      return Service.find(Object.assign({}, context, { query: args })).then(result => result[0]);
    },
  });
  Object.assign(Query, {
    [`${FindServiceName}`]: (root, args, context) => {
        let {limit, skip} = args;
        args = _.omit(args, 'limit');
        args = _.omit(args, 'skip');
        args.$skip = skip;
        args.$limit = limit;
        return Service.find(Object.assign({}, context, { query: args })).then(result => {
          return { total: result.length, items: result };
        });
     
      }
      
    },
  );
}
