export interface AddOnModel {
    id: string;
    name: string;
    invoice_name?: string;
    description?: string;
    type: string;
    charge_type: string;
    price: number;
    currency_code?: string;
    period?: number;
    period_unit: string;
    unit?: string;
    status: string;
    archived_at?: number;
    enabled_in_portal: boolean;
    tax_code?: string;
    invoice_notes?: string;
    taxable?: boolean;
    meta_data?: any;
}
