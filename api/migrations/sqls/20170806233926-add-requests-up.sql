CREATE TABLE requests (
id SERIAL PRIMARY KEY,
max_id INT REFERENCES members(id) ON DELETE CASCADE,
min_id INT REFERENCES members(id) ON DELETE CASCADE,
UNIQUE(max_id, min_id)
);