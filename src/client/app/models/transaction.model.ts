export interface TransactionModel {
    id: string;
    customer_id?: string;
    subscription_id?: string;
    payment_method: string;
    reference_number?: string;
    gateway: string;
    type: string;
    date?: number;
    currency_code: string;
    amount?: number;
    id_at_gateway?: string;
    status?: string;
    error_code?: string;
    error_text?: string;
    voided_at?: number;
    amount_unused?: number;
    masked_card_number?: string;
    reference_transaction_id?: string;
    refunded_txn_id?: string;
    reversal_transaction_id?: string;
    linked_invoices?: LinkedInvoiceModel[];
    linked_credit_notes?: LinkedCreditNotesModel[];
    linked_refunds?: LinkedRefundModel[];
}

export interface LinkedInvoiceModel {
    invoice_id: string;
    applied_amount: number;
    applied_at: number;
    invoice_date?: number;
    invoice_total?: number;
    invoice_status?: string;
}

export interface LinkedCreditNotesModel {
    cn_id: string;
    applied_amount: number;
    applied_at: number;
    cn_reason_code: string;
    cn_date?: number;
    cn_total?: number;
    cn_status: string;
    cn_reference_invoice_id: string;
}

export interface LinkedRefundModel {
    txn_id: string;
    txn_status: string;
    txn_date: number;
    txn_amount: number;
}
