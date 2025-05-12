export interface Response<T> {
    data: T;
    message: string;
    success: boolean;
}

export enum DEVICE_BREAKPOINT {
    XS = 0,
    SM = 425,
    MD = 768,
    LG = 1024,
    XL = 1440,
    XXL = 1600,
}
