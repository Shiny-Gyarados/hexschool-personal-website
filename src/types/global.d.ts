declare global {
    interface Window {
        dataLayer: (Record<string, any> | any[])[];
    }
}
