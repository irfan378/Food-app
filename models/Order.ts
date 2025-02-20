import { createSchema, Type } from "ts-mongoose";
import mongoose from "mongoose";

const OrderSchema = createSchema(
  {
    customer: Type.string({ required: true, maxlength: 60 }),
    address: Type.string({ required: true, maxlength: 200 }),
    total: Type.number({ required: true }),
    status: Type.number({ default: 0 }),
    method: Type.number({ required: true }),
  },
  { timestamps: true }
);
export const Order=mongoose.models.Order||mongoose.model("Order",OrderSchema)