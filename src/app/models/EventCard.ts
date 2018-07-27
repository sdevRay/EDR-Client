export interface EventCard {
    eventDate: string,
    eventName: string,
    eventCity: string,
    eventState: string,
    eventType: string,
    measurement: string,
    unit: string,
    eventDistance: number,
    goalHours: number,
    goalMinutes: number,
    goalSeconds: number,
    update?: boolean
}