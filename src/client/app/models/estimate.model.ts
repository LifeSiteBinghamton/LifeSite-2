import { InvoiceModel } from './invoice.model';
import { CreditNoteModel } from './creditnote.model';

export interface EstimateModel {
    created_at: number;
    invoice_estimate: InvoiceModel;
    subscription_estimate: SubscriptionEstimateModel;
    credit_note_estimates: CreditNoteModel[];
}

export interface SubscriptionEstimateModel {
    currency_code?: string;
    next_billing_at?: number;
    status?: string;
}
