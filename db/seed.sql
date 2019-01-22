-- DROP DATABASE IF EXISTS maintenance_db;

-- CREATE DATABASE maintenance_db;

-- \c maintenance_db

CREATE TABLE companies (
     comp_id SERIAL PRIMARY KEY,
     comp_name VARCHAR,
     comp_description text,
     comp_logo text
);

CREATE TABLE clients (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR,
    client_type VARCHAR
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

-- CREATE Table User (SW

-- );

 
 INSERT INTO companies(comp_name,comp_description,comp_logo) 
 VALUES ('SABACO','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png'),
  ('MUNERA','Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.','https://www.freeiconspng.com/uploads/company-icon--desktop-business-icons--softiconsm-23.png'),
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



 