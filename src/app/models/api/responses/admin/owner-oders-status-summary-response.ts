export type OrderStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export type OrderStatusSummaryResponse = Partial<Record<OrderStatus, number>>;
