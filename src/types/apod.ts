export interface ApodResponse {
    explanation: string;
    date: string;
    hdurl ?: string;
    media_type: "image" | "video";
    service_version: string;
    title: string;
    url: string;
    copyright ?: string;
}    

export interface ApodParams {
    date?: string;
    start_date?: string;
    end_date?: string;
    count?: number;
}