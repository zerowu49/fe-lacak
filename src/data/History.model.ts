import Product from "./Product.model";

export default interface History {
  TxId?: string
  timestamp?: Date
  IsDelete?: string
  Value?: Product
}