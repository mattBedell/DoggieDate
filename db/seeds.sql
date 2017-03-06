BEGIN;

TRUNCATE members, dogs, d_attrs, dog_attr_refs RESTART IDENTITY CASCADE;

INSERT INTO members(first, last, username, password, salt, zip, picture) VALUES
('Matt', 'Bedell', 'mBedell', 'hash12345', 'efcpoerevepmvepioet', '07030', 'https://lh6.googleusercontent.com/g8_oV5-CHPg8G2JGJ-QEngRWDcvqGP-0R7V-4qsK4HTXaPiSlRYK3x61Lm5PxpzXUrAap9RteaYnq_0=w2560-h1452-rw'),
('Aaron', 'Conklin', 'aConklin', 'hash12345', 'wvopkropekpkttebt', '10010', 'http://i.imgur.com/Ex1djBV.jpg');

INSERT INTO dogs (member_id, name, age, weight, picture) VALUES
(1, 'Tucker', 16, 20, null),
(1, 'Luigi', 10, 10, null),
(2, 'Frenchy', 1, 10, null);

INSERT INTO d_attrs (attribute, attr_catagory) VALUES
('chase', 'activities'),
('fetch', 'activities'),
('running', 'activities'),
('walking', 'activities'),
('biking', 'activities'),
('hiking', 'activities'),
('wrestling', 'activities'),
('exploring', 'activities'),

('mellow', 'temperament'),
('shy', 'temperament'),
('confident', 'temperament'),
('fearful', 'temperament'),
('frantic', 'temperament'),
('high energy', 'temperament'),
('low energy', 'temperament'),

('tennis balls', 'interests'),
('sticks', 'interests'),
('bacon', 'interests'),
('getting pet', 'interests'),
('digging', 'interests'),
('sniffing', 'interests'),
('hanging out', 'interests');

INSERT INTO dog_attr_refs (dog_id, attr_id) VALUES
(1, 4),
(1, 6),
(1, 11),
(1, 21),
(1, 22),
(2, 2),
(2, 4),
(2, 10),
(2, 12),
(2, 16),
(2, 18),
(2, 19),
(3, 4),
(3, 5),
(3, 9),
(3, 14),
(3, 18),
(3, 19),
(3, 22);

COMMIT;
