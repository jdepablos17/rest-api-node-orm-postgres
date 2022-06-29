import { Os } from "../models/os.js"
import { Users } from "../models/users.js";
import { Items } from "../models/items.js";

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

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const values = req.body;

    if(values?.id_country && parseInt(values?.id_country, 10) === NaN){
      res.status(400).json("Field id_country must be a valid number");
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

export const getItems = async (req, res) => {
  try {
    const items = await Items.findAll({
      atributes: ["id", "name", "price", "offer"],
    });
    res.status(200).json(items);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

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
};
