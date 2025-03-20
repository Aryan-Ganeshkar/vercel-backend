import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  company: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Company", companySchema);
