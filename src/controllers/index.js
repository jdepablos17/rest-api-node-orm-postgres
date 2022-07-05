import { Os } from "../models/os.js"
import { Users } from "../models/users.js";
import { Items } from "../models/items.js";
import { Countries } from "../models/countries.js";
import { sequelize } from "../database/database.js";
import Sequelize from "sequelize";

export async function createUser(req, res) {
  try {
    const { id_country, gender, birthday, name, lastname, nickname, email } = req.body;

    if(id_country && isNaN(parseInt(id_country, 10))){
      res.status(400).json("Field id_country must be a valid number");
      return
    }

    if (!gender || !birthday || !name || !lastname || !nickname || !email) {
      res.status(400).json('Some fields are required');
      return
    }
    const country = await Countries.findByPk(id_country);
    if(!country){
      res.status(400).json('The country entered does not exist in the database.');
      return
    }
    const newUser = await Users.create(
        { id_country, gender, birthday, name, lastname, nickname, email },
        {
          fields: ["id_country", "gender", "birthday", "name", "lastname", "nickname", "email"],
        }
    );
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });

  }
}

export async function createItem(req, res) {
  const { name, price, offer } = req.body;
  if (!name || !price || (!offer && offer !== 0)) {
    res.status(400).json('Some fields are required');
    return
  }
  try {
    const newItem = await Items.create(
      { name, price, offer },
      {
        fields: ["name", "price", "offer"],
      }
    );
    return res.status(200).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const values = req.body;

    if(values?.id_country && parseInt(values?.id_country, 10) === NaN){
      res.status(400).json("Field id_country must be a valid number");
      return
    }

    const user = await Users.findByPk(id);
    Object.keys(values).map(key => {
      if (key === 'id_country') {
        user[key] = parseInt(values?.id_country, 10)
      } else {
        user[key] = values[key]
      }
    })
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export const updateOs = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if(!name){
      res.status(400).json("Field name is required");
    }

    const os = await Os.findByPk(id);
    os.name = name;
    await os.save();
    res.status(200).json(os);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Items.findAll({
      attributes: ["id", "name", "price", "offer"],
    });
    res.status(200).json(items);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCountryWithUser = async (req, res) => {
  try {
    const countries = await Countries.findAll({
      attributes: ['name'],
      include: { model: Users, required: true },
    });
    res.status(200).json(countries);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export async function getItemsGroupBy(req, res) {
  try {
    const items = await Items.findAll({
      attributes: ['name', [sequelize.fn('COUNT',sequelize.col('*')), 'Count']],
      where:{
        name:{
          [Sequelize.Op.iLike]: "a%"
        } 
      },
      group: 'name',  
    });
    res.status(200).json(items);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCountryWithUserGrouped = async (req, res) => {
  try {
    const countries = await Countries.findAll({
      include: { model: Users, required: true },
      group: [sequelize.col('countries.name'), sequelize.col('countries.id'), sequelize.col('users.id')],
    });
    res.status(200).json(countries);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
