CREATE DATABASE invoice_app_db WITH OWNER = postgres ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C' TABLESPACE = pg_default CONNECTION
LIMIT
    = -1 IS_TEMPLATE = False;

CREATE TABLE users_tbl (
    user_id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE table invoices_tbl (
    user_id int,
    text VARCHAR(255) NOT NULL,
    CONSTRAINT fk_users_tbl FOREIGN key (user_id) REFERENCES users_tbl (user_id) ON
    DELETE CASCADE
);