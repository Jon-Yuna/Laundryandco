export type BagCount = 1 | 2 | 4

export type BagPlan = {
  label: string
  bags: BagCount
  lbs: number
  loads: number
  price: number
  pricePerLb: number
  tip: string
}

export const bagPlans: Record<BagCount, BagPlan> = {
  1: { label: '1 Bag Plan', bags: 1, lbs: 40,  loads: 4,  price: 50,  pricePerLb: 1.25, tip: 'Great for one person' },
  2: { label: '2 Bag Plan', bags: 2, lbs: 80,  loads: 8,  price: 90,  pricePerLb: 1.12, tip: 'Great for two people' },
  4: { label: '4 Bag Plan', bags: 4, lbs: 160, loads: 16, price: 160, pricePerLb: 1.00, tip: 'Great for families'   },
}

export const PROMO = 0.30
export const ONE_TIME_PER_LB = 1.75
