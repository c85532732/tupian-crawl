var app = {
    dialect:"mssql",
    user: 'sa',
    password: 'McMadmin123456',
    server: '172.19.131.156',
    database: 'crawl',
    port: 1433,
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