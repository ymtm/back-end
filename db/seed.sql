DROP DATABASE IF EXISTS maintenance_db;

CREATE DATABASE maintenance_db;

\c maintenance_db


CREATE TABLE users(
  id serial primary key,
  name varchar NOT NULL,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL,
  user_type varchar NOT NULL  DEFAULT 'client'
);

CREATE TABLE companies (
     comp_id SERIAL PRIMARY KEY,
     comp_name VARCHAR,
     comp_description text,
     comp_logo text,
     users_id INT , 
     foreign key(users_id) references users
);

CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR,
    client_type VARCHAR,
    users_id INT , 
    foreign key(users_id) references users
);


CREATE TABLE contracts (
    contract_id SERIAL PRIMARY KEY,
    contract_period INT,
    contract_status VARCHAR,
    contract_issue_date date,
    company_id INT NOT NULL,
    client_id INT NOT NULL,
    foreign key(company_id) references companies,
    foreign key(client_id) references clients
);


 INSERT INTO companies(comp_name,comp_description,comp_logo) 
 VALUES ('SABACO','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png'),
  ('MUNEERA','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png'),
  ('MAY','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png'),
  ('YAHYA','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png'),
  ('TURKI','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png');

  INSERT INTO clients(client_name,client_type) 
  VALUES ('dunkin donuts', 'Cafe'),
   ('Macdonalds', 'Resturant'),
   ('holidayInn', 'Hotel'),
   ('RiyadhPark', 'Mall'),
   ('Alaskar', 'Residencial');

  INSERT INTO contracts (contract_period,contract_status,contract_issue_date,company_id,client_id)
  VALUES(6,'Active','2019-01-14',1,1),
  (6,'Active','2019-01-14',1,2),
  (6,'Active','2019-01-14',1,3),
  (6,'Pending','2019-01-14',2,4),
  (6,'Expired','2019-01-14',3,5);

