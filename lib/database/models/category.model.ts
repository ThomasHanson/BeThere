import { Schema, model, models } from "mongoose"

export interface ICategory extends Document {
    _id: string;
    name: string;
    icon: string;
}

const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
})

const Category = models.Category || model('Category', CategorySchema);

export default Category;