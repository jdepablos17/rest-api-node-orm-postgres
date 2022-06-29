import { Os} from "../models/os.js"
import { Devices } from "../models/devices.js";

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

 /* export const updateDevice = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if(!name){
        res.status(400).json("Field name is required");
      }
  
      const devices = await Devices.findByPk(id);
      devices.name = name;
      await devices.save();
  
      res.status(200).json(devices);


    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };*/