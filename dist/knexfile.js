"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knexfile = {
    development: {
        client: "postgresql",
        connection: {
            database: "postgres",
            user: "postgres",
            password: "postgres",
        },
        useNullAsDefault: true,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
module.exports = knexfile;
//# sourceMappingURL=knexfile.js.map