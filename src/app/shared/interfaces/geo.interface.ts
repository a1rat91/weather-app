export interface GeoResponseInterface {
    city: CityInfoInterface
    country: CountryInfoInterface
    region: RegionInfoInterface
    created: string
    error: string
    ip: string
    request: number
    timestamp: number
}

interface CityInfoInterface {
    id: number
    lat: number
    lon: number
    name_de: string
    name_en: string
    name_es: string
    name_fr: string
    name_it: string
    name_pt: string
    name_ru: string
    okato: string
    population: number
    post: string
    tel: string
    vk: number,
}

interface CountryInfoInterface {
    area: number
    capital_en: string
    capital_id: number
    capital_ru: string
    continent: string
    cur_code: string
    id: number
    iso: string
    lat: number
    lon: number
    name_de: string
    name_en: string
    name_es: string
    name_fr: string
    name_it: string
    name_pt: string
    name_ru: string
    neighbours: string
    phone: string
    population: number
    timezone: string
    utc: number
    vk: number
}

interface RegionInfoInterface {
    auto: string
    id: number
    iso: string
    lat: number
    lon: number
    name_de: string
    name_en: string
    name_es: string
    name_fr: string
    name_it: string
    name_pt: string
    name_ru: string
    okato: string
    timezone: string
    utc: number
    vk: number
}
