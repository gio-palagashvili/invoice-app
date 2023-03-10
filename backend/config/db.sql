CREATE DATABASE invoice_app_db WITH OWNER = postgres ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C' TABLESPACE = pg_default CONNECTION
LIMIT
    = -1 IS_TEMPLATE = False;

CREATE TABLE users_tbl (
    user_id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE table invoices_tbl (
    invoice_index serial PRIMARY KEY,
    invoice_id VARCHAR(255) NOT NULL UNIQUE,
    invoice_status VARCHAR(255) NOT NULL,
    billing_address VARCHAR(255) NOT NULL,
    billing_city VARCHAR(255) NOT NULL,
    billing_country VARCHAR(255) NOT NULL,
    due_date date not null,
    initial_date date not null,
    invoice_total VARCHAR(255) NOT NULL,
    user_id int,
    text VARCHAR(255) NOT NULL,
    CONSTRAINT fk_users_tbl FOREIGN key (user_id) REFERENCES users_tbl (user_id) ON
    DELETE CASCADE
);

CREATE table invoice_item_tbl (
    item_index serial PRIMARY KEY,
    item_name VARCHAR(255) not null,
    invoice_index int,
    qty VARCHAR(255),
    price VARCHAR(255),
    total VARCHAR(255),
    CONSTRAINT fk_invoices_tbl FOREIGN key (invoice_index) REFERENCES invoices_tbl (index) ON
    DELETE CASCADE
)