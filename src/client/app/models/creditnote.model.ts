import { LineItemModel } from './invoice.model';
import { DiscountModel } from './invoice.model';

export interface CreditNoteModel {
    type: string;
    sub_total: string;
    total: string;
    amount_allocated: string;
    amount_available: string;
    line_items: LineItemModel[];
    discounts: DiscountModel[];
    currency_code: string;
}
