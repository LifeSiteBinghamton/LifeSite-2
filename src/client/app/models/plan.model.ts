export interface PlanModel {
    id: string;
    name: string;
    invoice_name?: string;
    description?: string;
    trial_period?: number;
    trial_period_unit?: number;
    period?: number;
    period_unit?: string;
    setup_cost?: number;
    price?: number;
    currency_code?: string;
    billing_cycles?: number;
    charge_model?: string;
    free_quantity?: number;
    redirect_url?: string;
    enabled_in_hosted_pages?: boolean;
    enabled_in_portal?: boolean;
    taxable?: boolean;
    tax_code?: string;
    invoice_notes?: string;
    meta_data: {base_plan: string}; // monthly or annual billing
}
