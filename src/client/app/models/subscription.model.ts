export interface SubscriptionModel {
    id: string;
    customer_id: string;
    currency_code: string;
    plan_id: string; // lifesite-plus
    plan_quantity: string;
    status: string;
    start_date?: number;
    trial_start?: number;
    trial_end?: number;
    current_term_start?: number;
    current_term_end?: number;
    remaining_billing_cycles?: number;
    po_number?: string;
    created_at?: number;
    started_at?: number;
    activated_at?: number;
    cancelled_at?: number;
    cancel_reason?: string;
    affiliate_token?: string;
    created_from_ip?: string;
    has_scheduled_changes: boolean;
    due_invoices_count?: number;
    due_since?: number;
    total_dues?: number;
    invoice_notes?: string;
    meta_data: {base_plan: string}; // monthly or annual billing
    addons?: [{id: string, quantity?: string}];
    coupons?: [{coupon_id: string, apply_till?: number, applied_count: number, coupon_code?: string}];
}
