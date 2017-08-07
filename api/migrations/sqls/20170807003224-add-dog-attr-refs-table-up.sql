CREATE TABLE dog_attr_refs (
dog_id INT REFERENCES dogs(id) ON DELETE CASCADE,
attr_id INT REFERENCES dog_attrs(id) ON DELETE CASCADE
);