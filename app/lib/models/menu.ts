import mongoose, { models, Schema } from "mongoose";

interface MenuItem extends Document {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  size: string;
}

const menuSchema = new Schema<MenuItem>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
});

const Menu = models.Menu || mongoose.model<MenuItem>("Menu", menuSchema);

export default Menu;
