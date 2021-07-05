REVOKE CONNECT ON DATABASE "people-info-db" FROM public;

DROP DATABASE IF EXISTS "people-info-db";
CREATE DATABASE "people-info-db";
\c "people-info-db"
CREATE USER usr WITH PASSWORD 'psswrd';
GRANT ALL PRIVILEGES ON DATABASE "people-info-db" to usr;

CREATE TABLE hello (
    id SERIAL,
    hello_world VARCHAR(20) NOT NULL
);
