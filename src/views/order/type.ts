import { PropsWithChildren } from "react";

export type IDAta = {
  id: number;
  date: string;
  buyer: string;
  phone: string;
  price: string;
  paymentType: string;
  paymentStatus: string;
  paidAmount: string;
  promoCode: string;
  discount: string;
  status: string;
  notes: string;
};

export interface IOrderTable extends PropsWithChildren {
  Colms?: string[];
  title: string;
  className?: string;
}
