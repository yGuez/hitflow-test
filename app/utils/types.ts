export interface WaypointType {
    city: string
    postalCode: number
    date: Date
}

export enum OptionsType {
    WASHING = 'Lavage',
    GARAGE = 'W-Garage',
}

export interface MissionType {
    departure: WaypointType
    arrival: WaypointType
    price: number
    km: number
    costumer: string
    reference: number
    options: OptionsType[]
    quotations: number
}
