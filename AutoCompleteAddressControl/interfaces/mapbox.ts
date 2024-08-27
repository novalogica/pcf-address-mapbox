export interface MapboxResponse {
    features: Feature[]
}

interface Feature {
    properties: Properties
}

interface Properties {
    name: string
    address: string
    full_address: string
    place_formatted: string
    context: Context
    language: string
}

interface Context {
    country: Info
    postcode: Info
    place: Info
    address: Info
    street: Info,
    region: Info,
    locality: Info
}

interface Info {
    id: string
    name: string
}