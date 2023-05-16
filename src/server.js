const hapi = require('@hapi/hapi')
const routes = require('./routes.js')

const main = async () => {
    const server = hapi.server({
        port : 5000,
        host : 'localhost',
        routes : {
            cors : {
                origin : ['*'],
            }
        }
    })
    server.route(routes);
    
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`);
}

main();