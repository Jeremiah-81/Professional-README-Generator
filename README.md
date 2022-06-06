# Professional-README-Generator

This is designed to keep track of new and present employees and their job titles.

## Description

With the ever growing industries things can get confusing trying to keep up with all the employees, so this makes it easy to keep track of everyone in the company.

## Screenshot

https://raw.githubusercontent.com/Jeremiah-81/Team-Profile-Generator/main/10-object-oriented-programming-homework-demo.png

## Tech/Framework

Jest

### How to Use

## Features

You can look up a singel employee or an entire department based on what your looking for.

### Credits


## This README was generated with ❤️ by: 


const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class traveler extends Model {}

traveler.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            vailidate: {
                isEmail: true,
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveler',
    }
);

module.exports = traveler;


  ## Table of Contents:
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributing](#Contributing)
  -[tests](#tests)
  -[Questions](#Questions)

  ## Installation:
  - ${data.installation}

  ## Usage:
  - ${data.usage}

  ## License:
  - ${data.license}

  ## Contributing:
  - ${data.contributing}

  ## Tests:
  - ${data.tests}

  ## Questions:
  - ${data.questions}