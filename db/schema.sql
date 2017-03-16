DROP TABLE IF EXISTS members, dogs, d_attrs, dog_attr_refs, requests, matches, posts CASCADE;

CREATE TABLE members (
 id SERIAL PRIMARY KEY,
 first VARCHAR(20) NOT NULL,
 last VARCHAR(20) NOT NULL,
 username VARCHAR(50) UNIQUE NOT NULL ,
 password VARCHAR NOT NULL,
 email VARCHAR UNIQUE NOT NULL,
 zip CHAR(10) NOT NULL,
 picture VARCHAR
);

CREATE TABLE requests (
 id SERIAL PRIMARY KEY,
 requester INT REFERENCES members (id) ON DELETE CASCADE,
 requestee INT REFERENCES members (id) ON DELETE CASCADE
);

CREATE TABLE matches (
 id SERIAL PRIMARY KEY,
 member INT REFERENCES members (id) ON DELETE CASCADE,
 match INT REFERENCES members (id) ON DELETE CASCADE
);

CREATE TABLE posts (
 id SERIAL PRIMARY KEY,
 match_id INT REFERENCES matches (id) ON DELETE CASCADE,
 post VARCHAR NOT NULL,
 poster INT REFERENCES members (id) ON DELETE CASCADE,
 time_stamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE dogs (
 id SERIAL PRIMARY KEY,
 member_id INT REFERENCES members (id) ON DELETE CASCADE,
 name VARCHAR(50) NOT NULL,
 age INT NOT NULL,
 weight INT NOT NULL,
 picture VARCHAR
);

CREATE TABLE d_attrs (
 id SERIAL PRIMARY KEY,
 attribute VARCHAR(50) NOT NULL,
 attr_catagory VARCHAR(50) NOT NULL
);

CREATE TABLE dog_attr_refs (
 dog_id INT REFERENCES dogs (id) ON DELETE CASCADE,
 attr_id INT REFERENCES d_attrs (id)
);
