const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    price: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String },
    image: { type: String },
    image2: { type: String },

    categorie: { type: String },
    user_id: { type: String },
    shop: { type: String },
    phone: { type: String },
    localisation: { type: String },
    km: { type: String },
    gear: { type: String },
    year: { type: String },
    cylinder: { type: String },
    PuissanceF: { type: String },
    Carburant: { type: String },
    model: { type: String },
    gender: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
