var app = {
    dialect:"mysql",
    user: 'root',
    password: 'root',
    server: '127.0.0.1',
    database: 'tupian',
    port: 3306,
    options: {
        encrypt: true // Use this if you're on Windows Azure
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
};

module.exports = app;