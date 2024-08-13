export interface IPhoto {
    src: string;
    width: number;
    height: number;
    key: string;
    alt: string;
    title: string;
    href: string;
    label: string;
    srcSet: IPhotoSrcSet[];
}

export interface IPhotoSrcSet {
    src: string;
    width: number;
    height: number;
}