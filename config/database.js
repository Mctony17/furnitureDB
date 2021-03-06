module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                host: env('DATABASE_HOST', 'furniture.nuqkv.mongodb.net'),
                srv: env.bool('DATABASE_SRV', true),
                port: env.int('DATABASE_PORT', 27017),
                database: env('DATABASE_NAME', 'furniture'),
                username: env('DATABASE_USERNAME', 'ofia'),
                password: env('DATABASE_PASSWORD', 'ofia'),
            },
            options: {
                authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
});