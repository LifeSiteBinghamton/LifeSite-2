export interface InvoiceModel {
    id: string;
    po_number?: string;
    customer_id: string;
    subscription_id?: string;
    recurring: boolean;
    status: string;
    vat_number?: string;
    price_type: string;
    date?: number;
    currency_code: string;
    total?: number;
    amount_paid?: number;
    amount_adjusted?: number;
    write_off_amount?: number;
    credits_applied?: number;
    amount_due?: number;
    paid_at?: number;
    dunning_status?: string;
    next_retry_at?: number;
    sub_total: number;
    tax: number;
    first_invoice?: boolean;
    line_items: LineItemModel[];
}

export interface LineItemModel {
    id?: string;
    date_from: number;
    date_to: number;
    unit_amount: number;
    quantity?: number;
    is_taxed: boolean;
    tax_amount?: number;
    tax_rate?: number;
    amount: number;
    discount_amount?: number;
    item_level_discount_amount?: number;
    description: string;
    entity_type: string;
    entity_id?: string;
    discounts?: DiscountModel[];
    taxes?: TaxModel[];
    line_item_taxes?: LineItemTaxModel[];
    linked_payments?: LinkedPaymentModel[];
    applied_credits?: AppliedCreditModel[];
    adjustment_credit_notes?: AdjustmentCreditNoteModel[];
    issued_credit_notes?: IssuedCreditNoteModel[];
    linked_orders?: LinkedOrderModel[];
    notes?: NoteModel[];
    billing_address?: BillingAddressModel;
}

export interface DiscountModel {
    amount: number;
    description?: string;
    entity_type: string;
    entity_id?: string;
}

export interface TaxModel {
    name: string;
    amount: number;
    description?: string;
}

export interface LineItemTaxModel {
    line_item_id?: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type?: string;
    tax_juris_name?: string;
    tax_juris_code?: string;
}

export interface LinkedPaymentModel {
    txn_id: string;
    applied_amount: number;
    applied_at: number;
    txn_status?: string;
    txn_date?: number;
    txn_amount?: number;
}

export interface AppliedCreditModel {
    cn_id: string;
    applied_amount: number;
    applied_at: number;
    cn_reason_code: string;
    cn_date?: number;
    cn_status: string;
}

export interface AdjustmentCreditNoteModel {
    cn_id: string;
    cn_reason_code: string;
    cn_date?: number;
    cn_total?: number;
    cn_status: string;
}

export interface IssuedCreditNoteModel {
    cn_id: string;
    cn_reason_code: string;
    cn_date?: number;
    cn_total?: number;
    cn_status: string;
}

export interface LinkedOrderModel {
    id: string;
    status?: string;
    reference_id?: string;
    fulfillment_status?: string;
    batch_id?: string;
    created_at: number;
}

export interface NoteModel {
    entity_type: string;
    note: string;
    entity_id?: string;
}

export interface BillingAddressModel {
    first_name?: string;
    last_name?: string;
    email?: string;
    company?: string;
    phone?: string;
    line1?: string;
    line2?: string;
    line3?: string;
    city?: string;
    state_code?: string;
    state?: string;
    country?: string;
    zip?: string;
}
