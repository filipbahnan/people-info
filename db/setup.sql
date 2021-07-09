REVOKE CONNECT ON DATABASE "people-info-db" FROM public;

DROP DATABASE IF EXISTS "people-info-db";
CREATE DATABASE "people-info-db";
\c "people-info-db"

CREATE TABLE hello (
    id SERIAL,
    hello_world VARCHAR(20) NOT NULL
);

CREATE TABLE users (
    id SERIAL,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL
);

DROP USER IF EXISTS usr;
CREATE USER usr WITH PASSWORD 'psswrd';
GRANT CONNECT ON DATABASE "people-info-db" TO usr;

GRANT ALL PRIVILEGES ON DATABASE "people-info-db" TO usr;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO usr;

